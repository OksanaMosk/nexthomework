import React from 'react';
import CommentsComponent from "@/components/comments/CommentsComponent";

const CommentsPage = () => {
    return (
        <div>
            <h1 className="flex justify-center text-[#3af0f0] text-5xl text-shadow-glow mb-10 mt-10">
                Comments
            </h1>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;
