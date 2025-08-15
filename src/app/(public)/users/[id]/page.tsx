import React from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";
import {getUserById} from "@/services/userById_service";

type Props = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>,
}

export const generateMetadata=async ({params}:Props):Promise<Metadata> => {
    const {id} = await params
    return {
        title: "User with id # " + id
    }
}

const UserPage = async ({ params }: { params: Promise <{ id: string }> }) => {
   const checkParams= await params;
    const user: IUser = await getUserById(checkParams.id);

    const {id, name, username, email, address, phone, website, company} = user

    return (
        <div className="my-18 mx-auto self-center flex flex-col justify-between w-[800px] gap-3 text-white  bg-[#343632]  transition-all duration-300
                   hover:bg-gradient-to-l hover:from-[#3af0f0] hover:to-inherit   box-border p-5 rounded-xl cursor-pointer  border-white border-[1px] ">
            <div className="flex justify-between shadow-[0_0_10px_rgba(255,_255,_255,_0.8)]  p-5 mt-2 text-[14px] rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <div>
                    <h2 className="text-[18px] text-[#3af0f0]">{name}</h2>
                    <p  className=" text-[#3af0f0]">Username: {username} (<span className="italic"> {email}</span>)</p>
                </div>
                <p className="mb-2 "><strong>ID: </strong>{id}</p>
            </div>

            <div className="shadow-[0_0_10px_rgba(255,_255,_255,_0.8)] p-5 mt-2 text-[14px] rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <p><strong>Address:</strong></p>
                <p>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </p>
                <p>
                    Geo: {address.geo.lat}, {address.geo.lng}
                </p>
                <p>Phone: {phone}</p>
                <p  className="mb-2">Website: {website}</p>
            </div>

            <div className="shadow-[0_0_10px_rgba(255,_255,_255,_0.8)] p-5 mt-2 text-[14px] rounded-xl hover:shadow-[0_0_10px_rgba(0,_0,_0,_0.8)]">
                <p><strong>Company:</strong></p>
                <p>Company name: {company.name}</p>
                <p>Catch phrase:{company.catchPhrase}</p>
                <p  className="mb-2">Bs: {company.bs}</p>
            </div>

        </div>
    );
};

export default UserPage;
