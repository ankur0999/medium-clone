import {Link} from "react-router-dom"
interface BlogCardProperty {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string
}


export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id}: BlogCardProperty) =>{
    return <Link to={`/blog/${id}`}> <div className="border-b pb-6 p-4">
        
        <div className="mb-2 flex w-full ">
            <div >
                <Avatar name = {authorName} /> 
            </div>
            <div className="flex ml-2">
                <div className="mr-1 font-medium flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col mr-1">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col text-slate-500">
                     {publishedDate}
                </div>
            </div>
        </div>
        <div className="font-bold text-xl">
            {title}
        </div>
        <div className="text-md">
            {content.slice(0, 150) + "..."}
        </div>
        <div className="mt-5 ml-3 text-slate-500">
            {`${Math.ceil(content.length/100)} minutes read`}
        </div>
        
    </div>    </Link>
}
export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-200">

    </div>
}
export function Avatar({name, size ="small", color="grey"}:{name:string, size?: string, color?:string})  {
   return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6": " w-10 h-10"} h-${size} overflow-hidden  rounded-full p-1 ${color === "white" ? "bg-gray-50": "bg-gray-100 dark:bg-gray-500"} `}>
       <span className={`${size === "small" ?  "text-sm": "text-xl"} font-medium ${color === "white" ? "text-grey-400 rounded-full border-2":"text-gray-50 dark:text-gray-50"} `}>{name[0]}</span>
   </div>
   
}