
import React from "react";

type Props={
    children: React.ReactNode;
}

const PostLayout= ({ children }:Props) => {
    return (
        <>
            {children}
        </>

    );
}
export default PostLayout;
