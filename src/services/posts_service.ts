import {IPost} from "@/models/IPost";

export const endpointPosts=process.env.NEXT_PUBLIC_API_BASE_URL + '/posts'


export const getAllPosts= async ():Promise<IPost[]>=>{
  return  await fetch(endpointPosts)
        .then (value=> value.json())

}
