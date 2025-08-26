import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Add Car",
};

type Props = {
    children: React.ReactNode;
}

const AddLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
}
export default AddLayout;
