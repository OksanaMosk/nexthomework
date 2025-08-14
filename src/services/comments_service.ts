import {IComment} from "@/models/IComment";

export const endpointComments=process.env.NEXT_PUBLIC_API_BASE_URL + '/comments'

export const getAllComments=async ():Promise<IComment[]>=>{
return await fetch(endpointComments)
        .then(value => value.json())

}
