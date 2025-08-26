import React, {FC} from 'react';
import {ICar} from "@/models/ICar";

interface CarComponentProps {
    car:ICar
}

const CarComponent:FC<CarComponentProps> = ({car}) => {
    const{brand, id,price, year} = car;
    return (
        <li className="flex flex-col justify-between w-[300px] gap-2 text-white box-border bg-black hover:bg-[#FFD700] hover:text-black p-7 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl border-white border-[1px]">
            <h2>Brand: {brand}</h2>
            <p>ID: {id}</p>
            <p>Price: ${price}</p>

            <p>Year:{year}</p>
        </li>
    );
};

export default CarComponent;
