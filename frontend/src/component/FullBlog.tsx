import { Appbar } from "./Appbar"
import { Blog } from "../hooks/index"

export const FullBlog = ({blog} : {blog:Blog}) =>{
    return<div>
        <Appbar />  
        <div className=" grid grid-cols-12 px-10 max-w-full w-full pt-20">
            <div className="col-span-1"></div>
            <div className="col-span-6 ">
                <div className="text-4xl font-bold mb-1">
                    {blog.title}
                </div>
                <div className="text-slate-400 mb-4">
                    Posted on August 24, 2023
                </div>
                <div className="text-sm ">
                    {blog.content}
                </div>
            
            
            </div>
            <div className="col-span-4 ">
                <div className="font-medium ">
                      Author
                </div>
                <div className="flex">
                    <div className="flex justify-center flex-col  mr-2">
                        <Circle />
                    </div>
                    <div className="pl-2">
                        <div className="text-xl font-bold flex justify-center flex-col pt-4 pb-2">
                            {blog.author.name || "Anonymous"}
                        </div>

                        <div className="text-slate-500">
                            Master of mirth, purveyor of puns, and the funniest person in the Kingdom.
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="col-span-1"></div>
        </div>
    </div>
}
function Circle(){
    return <div className="h-6 w-6 rounded-full bg-slate-200">

    </div>
}