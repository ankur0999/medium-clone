import { Circle } from "./BlogCard"

export const BlogsSkeleton = () =>{
    return <div className="flex justify-center">
     <div role="status" className="max-w-3xl  w-full animate-pulse">
     <div className="mb-2 flex w-full ">
            <div >
                <div className="h-4 w-4 bg-gray-200 rounded-full   mb-4"></div>

            </div>
            <div className="flex ml-2">
                <div className="mr-1 font-medium flex justify-center flex-col">
                <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4"></div>

                </div>
                <div className="flex justify-center flex-col mr-1">
                    <Circle/>
                </div>
                <div className="flex justify-center flex-col text-slate-500">
                <div className="h-2.5 bg-gray-200 rounded-full  w-54 mb-4"></div>

                </div>
            </div>
        </div>
        <div className="font-bold text-xl">
        <div className="h-2.5  bg-gray-200 rounded-full  w-56 mb-4"></div>

        </div>
        <div className="text-md">
        <div className="h-2.5 bg-gray-200 rounded-full  w-96 mb-4"></div>        </div>
        <div className="mt-5 ml-3 text-slate-500">
        <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4"></div>
        </div>


        
        <span className="sr-only">Loading...</span>
    </div>
    </div>
    
    
}

export const BlogSkeleton = () => {
    return <div role="status" className="max-w-sm animate-pulse">

<div className=" grid grid-cols-12 px-10 max-w-full w-full pt-20">
            <div className="col-span-1"></div>
            <div className="col-span-6 ">
                <div className="text-4xl font-bold mb-1">
                <div className="h-2.5 bg-gray-200 rounded-full  w-36 mb-4"></div>
                </div>
                <div className="text-slate-400 mb-4">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                </div>
                <div className="text-sm ">
                <div className="h-2.5 bg-gray-200 rounded-full  w-56 mb-4"></div>
                </div>
            
            
            </div>
            <div className="col-span-4 ">
                <div className="font-medium ">
                <div className="h-2.5 bg-gray-200 rounded-full  w-12 mb-4"></div>
                </div>
                <div className="flex">
                    <div className="flex justify-center flex-col  mr-2">
                        <Circle />
                    </div>
                    <div className="pl-2">
                        <div className="text-xl font-bold flex justify-center flex-col pt-4 pb-2">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-28 mb-4"></div>
                        </div>

                        <div className="text-slate-500">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="col-span-1"></div>
        </div>
        
        <span className="sr-only">Loading...</span>
    </div>
    
    
} 