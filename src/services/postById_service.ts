import {IPost} from "@/models/IPost";
import {endpointPosts} from "@/services/posts_service";


export const getPostById = async (id:string):Promise<IPost>=> {
    const url=`${endpointPosts}/${id}`;
    const response = await fetch(url)
    if (!response.ok) {
                throw new Error(
               `Error fetching post with id ${id}: ${response.statusText}`
        )
    }
 return await response.json();


}
