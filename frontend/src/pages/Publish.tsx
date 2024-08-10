import { useState } from "react"
import { Appbar } from "../component/Appbar"
import { CreateBlogInput } from "@r.ankur/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState<CreateBlogInput>({
        title : "",
        content: ""
    }) 
    async function publishPost (){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,post,{
                headers:{
                    Authorization: "Bearer "+ localStorage.getItem("token")
                }}
            )
            navigate(`/blog/${response.data.id}`)
        }catch(e){
             alert('unable to post')
        }
    }
    return <div>
        <Appbar />
        <div className="flex justify-center ">
        <div>
            
        <div className="max-w-screen-md w-full">
        <input onChange ={(e)=>{
            setPost({
                ...post,
                title: e.target.value
            })
        }} type="text" id="large-input" className="block w-full focus:outline-none p-4 text-gray-900 border-l-2 border-gray-300   text-5xl font-serif " placeholder="Title"></input>
        <textarea onChange ={(e)=>{
            setPost({
                ...post,
                content: e.target.value
            })
        }} id="message" rows={4} className="block p-4 w-full focus:outline-none text-gray-900    text-xl font-serif  " placeholder="Tell Your story..."></textarea>
        <button onClick={publishPost} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Publish Post</button>

    </div>
        </div>
        
        </div>

</div>
}


