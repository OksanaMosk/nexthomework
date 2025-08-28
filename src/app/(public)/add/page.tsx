import React from 'react';
import AddCarComponent from "@/components/add-car-component/AddCarComponent";


const AddCarPage = () => {
    return (
        <div>
            <h1 className="flex flex-col justify-center items-center  text-[#FFD700] text-5xl text-shadow-glow mb-10 mt-10">
                Add your car
            </h1>
            <AddCarComponent/>

        </div>
    );
};

export default AddCarPage;
