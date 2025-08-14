import React from 'react';
import Link from "next/link";
import {getAllPosts} from "@/services/posts_service";

const PostsComponent = async () => {
    const posts = await getAllPosts();
    return (
        <ul className="flex flex-wrap justify-center items-center gap-10 mb-10 mt-10">
            {posts.map((post) =>
                <Link
                    className="flex flex-col justify-center w-[600px] h-[100px] text-black box-border bg-[#C0C0C0] hover:bg-white p-7 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl border-white border-[1px]"
                    key={post.id} href={`/posts/${post.id.toString()}`}>
                    <div className="flex items-center justify-between">
                        <p className="w-2/3">{post.title}</p>
                        <p>ID: {post.id}</p>
                    </div>
                </Link>
            )
            }
        </ul>
    );
};

export default PostsComponent;
