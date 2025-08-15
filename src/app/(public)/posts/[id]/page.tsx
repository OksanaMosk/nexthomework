import React from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";
import {getPostById} from "@/services/postById_service";

type Props = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>,
}

export const generateMetadata=async ({params}:Props):Promise<Metadata> => {
    const {id} = await params
    return {
        title: "Post with id # " + id
    }
}
const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const checkParams = await params; // якщо це проміс, дочекаємось, якщо ні — повернеться той же обʼєкт
    const post: IPost = await getPostById(checkParams.id);


    const {id, userId, title, body}=post

    return (
        <div className="my-18 mx-auto self-center flex flex-col justify-between w-[800px] gap-3 text-[18px] text-white  bg-[#343632]   transition-all duration-300
                   hover:bg-gradient-to-l hover:from-[#3af0f0] hover:to-inherit box-border p-5 rounded-xl cursor-pointer  border-white border-[1px] ">
            <div className="flex flex-col shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]  p-5 mt-2 rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <div className="flex justify-between">
                    <p className="">ID: {id}</p>
                    <p className="">Post ID: {userId}</p>
                </div>
                <h2 className="text-[#3af0f0]">{title}</h2>
            </div>

            <div className="italic text-justify shadow-[0_0_10px_rgba(255,_255,_255,_0.8)] px-5 py-12 mt-2 rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
             <p>{body}</p>
            </div>
        </div>
    );
};

export default PostPage;
