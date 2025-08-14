import React from 'react';
import {getAllComments} from "@/services/comments_service";
import Link from "next/link";

const CommentsComponent = async () => {
    const comments= await getAllComments()
    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10 mt-10">
            {
                comments.map((comment)=>  <Link className="flex flex-col justify-between w-[600px] gap-10 text-white box-border bg-inherit hover:bg-white hover:text-black p-7 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl border-white border-[1px]" key={comment.id} href={`/comments/${comment.id.toString()}`}>
                    <div className="flex justify-between">
                        <p>{comment.name}</p>
                        <p>ID: {comment.id}</p>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default CommentsComponent;
