import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () =>{
    return <div className="flex justify-between px-10 py-4">
         <Link to="/blogs">
         <div className="flex justify-center flex-col">
            Medium
         </div>
         </Link>
         <div className="flex ">
            <div className="mr-4 ">
               <Link to="/publish">
                  <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
               </Link>
            </div>

            <Avatar name="Ankur" size="large" />
         </div>
    </div>
}