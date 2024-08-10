import { useParams } from "react-router-dom";
import { FullBlog } from "../component/FullBlog";
import { useBlog } from "../hooks";
import { BlogSkeleton } from "../component/BlogSkeleton";
import { Appbar } from "../component/Appbar";
export const Blog = () => {
    const { id } = useParams();
    
    const {loading,blog} = useBlog({
        id : id || ""
    });
    console.log(id);

    if(loading || ! blog){
        return <div>
            <Appbar />
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <FullBlog blog = {blog}/>
    </div>
}