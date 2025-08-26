
export const dynamic = "force-dynamic";


import React from 'react';
import CarsComponent from "@/components/cars-component/CarsComponent";


const CarsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="flex justify-center text-[#FFD700] text-5xl text-shadow-glow mb-10 mt-10">
                Cars
            </h1>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;
