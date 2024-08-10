import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@r.ankur/medium-common'


 export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables:{
        userId: string;
    };
 }>();

// middleware
blogRouter.use('/*', async(c, next)=>{
  const header = c.req.header("authorization") || "";
  // Bearer token =>{"Bearer", "token"}
  try{
   const token = header.split(" ")[1]
  const response = await verify(token, c.env.JWT_SECRET)
  
  if(response){
    //@ts-ignore
    c.set("userId",response.id);
  await next();
  }else{
    c.status(401);
  return c.json({error: "you are not logged in"}) 
}}catch(e){
    c.status(411);
    return c.json({error: "You aren't logged in"})
}
  
  
})

// get all posts
blogRouter.get('/bulk', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
        const blog = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({blogs: blog})
    
})
// get a particular blog
blogRouter.get('/:id', async(c) => {
    const id = c.req.param('id')
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
        const blog = await prisma.post.findUnique({
            where:{
                id: id
            },
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({blog: blog})
    
})

// posting a blog
blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message: "fill full details"})
    }
    const userId = c.get("userId");
    try{
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })
        return c.json({id: blog.id})
    }catch(e){
        console.log(e);
        c.status(411);
        return c.json({error: "error while posting blog"})
    }
	
})
// update the post
blogRouter.put('/', async(c) => {
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message: "fill full details"})
    }
    try{ 
        const blog = await prisma.post.update({
            where:{
                id: body.id

            },
            data:{
                title: body.title,
                content: body.content
            }
        })
        return c.text('updated post')
    }catch(e){
        console.log(e);
        c.status(411);
        return c.json({error: "error while updating blog"})
    }
})