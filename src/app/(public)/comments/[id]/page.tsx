import React from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {getCommentById} from "@/services/commentsById_service";
import {IComment} from "@/models/IComment";

type Props = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>,
}

export const generateMetadata=async ({params}:Props):Promise<Metadata> => {
    const {id} = await params
    return {
        title: "Comments with id # " + id
    }
}

const CommentsPage = async ({ params }: { params: Promise<{id: string }>}) => {
    const checkComment=await params;
    const comment: IComment = await getCommentById(checkComment.id);

    const {postId, id, name, email, body}=comment

    return (
        <div className="my-18 mx-auto self-center flex flex-col justify-between w-[800px] gap-3 text-[18px] text-white  bg-[#343632] hover:bg-white hover:text-black  box-border p-5 rounded-xl cursor-pointer  border-white border-[1px] ">
            <div className="flex flex-col shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]  p-5 mt-2 rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <div className="flex justify-between">
                    <p className="">ID: {id}</p>
                    <p className="">Post ID: {postId}</p>
                </div>
                <h2 className="text-[#3af0f0]">{name} (<span className="italic">{email}</span>)</h2>
            </div>

            <div className="italic text-justify shadow-[0_0_10px_rgba(255,_255,_255,_0.8)] px-5 py-12 mt-2 rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <p>{body}</p>
            </div>
        </div>
    );
};

export default CommentsPage;
