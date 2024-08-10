
import { Appbar } from "../component/Appbar"
import { BlogCard } from "../component/BlogCard"
import { BlogsSkeleton } from "../component/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <Appbar />
           <BlogsSkeleton />
           <BlogsSkeleton />
           <BlogsSkeleton />
           <BlogsSkeleton />
           <BlogsSkeleton />
           <BlogsSkeleton />
           <BlogsSkeleton />
        </div>
    }
    return <div>
        <Appbar/>
    <div className="flex justify-center">
        <div className=" w-screen max-w-screen-md">
         {blogs?.slice(0).reverse().map(blog => <BlogCard id = {blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content}  publishedDate={"2nd Feb 2024"}/>)}</div>
    </div>
</div>
    }
    
