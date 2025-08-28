import CarComponent from "@/components/car-component/CarComponent";
import {getAllCars} from "@/services/cars-service";

const CarsComponent = async () => {
    const cars = await getAllCars()
    return (
        <ul className="flex flex-wrap justify-center items-center gap-10 mb-10 mt-10">
            {cars.map((car) => <CarComponent key={car.id} car={car}/>)
            }
        </ul>
    );
};

export default CarsComponent;
