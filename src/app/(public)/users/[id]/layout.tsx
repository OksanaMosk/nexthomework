import React from "react";

type Props={
    children: React.ReactNode;
}

const UserLayout= ({ children }:Props) => {
    return (
        <>
            {children}
        </>

    );
}
export default UserLayout;
