import React from 'react';
import {getAllUsers} from "@/services/users_service";
import Link from "next/link";

const UsersComponent = async () => {
  const  users = await getAllUsers();

    return (
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10 mt-10">
            {users.map((user) =>
                <Link className="flex flex-col justify-between w-[600px] gap-10 text-white box-border bg-black hover:bg-white hover:text-black p-7 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl border-white border-[1px]" key={user.id} href={`/users/${user.id.toString()}`}>
                    <div className="flex justify-between">
                    <p>{user.name}</p>
                    <p>ID: {user.id}</p>
                </div>
                </Link>
           )}
        </div>
    );
};

export default UsersComponent;
