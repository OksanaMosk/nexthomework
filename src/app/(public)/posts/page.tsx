import React from 'react';
import PostsComponent from "@/components/posts/PostsComponent";

const PostsPage = () => {
    return (
        <div>
            <h1 className="flex justify-center text-[#3af0f0]  text-5xl text-shadow-glow mb-10 mt-10">
                Posts
            </h1>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;
