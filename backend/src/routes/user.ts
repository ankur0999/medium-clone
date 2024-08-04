import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign} from 'hono/jwt'
import { signinInput, signupInput } from "@r.ankur/medium-common"



type Bindings = {
  DATABASE_URL : string
  JWT_SECRET : string
}

export const userRouter = new Hono<{Bindings: Bindings}>()

userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({message: "inputs are wrong"});
    }
    try{
      const user = await prisma.user.create({
        data: {
          email : body.email,
          password: body.password,
          name : body.name
        }})
      const token = await sign({id: user.id}, c.env.JWT_SECRET)
      return  c.json({jwt:token})
    }catch(e){
      c.status(403)
      console.log(e)
      return c.json({error: "error while signing up"});
    }
      
  })

  userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
   const body = await c.req.json();  
   const { success } = signinInput.safeParse(body);
   if(! success){
    c.status(411);
    return c.json({message: " wrong inputs"})
   }
   const user = await prisma.user.findUnique({
    where:{
      email: body.email
    }
   })
   if(!user){
    return c.json({error:"no user exist with this email"});
   }
   if(user.password == body.password){
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({jwt:token})
   }
      return c.json({error: "Password doesn't match"});
  })