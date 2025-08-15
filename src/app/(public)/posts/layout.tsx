import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Posts",
};

type Props = {
    children: React.ReactNode;
}

const PostsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>

    );
}
export default PostsLayout;
