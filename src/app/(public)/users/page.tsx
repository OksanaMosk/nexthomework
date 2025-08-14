import React from 'react';
import UsersComponent from "@/components/users/UsersComponent";

const UsersPage = () => {
    return (
        <div>
            <h1 className="flex justify-center text-[#3af0f0]  text-5xl text-shadow-glow mb-10 mt-10">
                Users
            </h1>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
