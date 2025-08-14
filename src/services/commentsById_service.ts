import {IComment} from "@/models/IComment";
import {endpointComments} from "@/services/comments_service";


export const getCommentById=async (id:string):Promise<IComment>=>{
    const url= `${endpointComments}/${id}`
   const response = await fetch (url)
    if(!response.ok) {
        throw new Error(
            `Error fetching comment with id ${id}: ${response.statusText}`
        )
    }
    return await response.json()
}
