import axios from "axios";
import {ICar} from "@/models/ICar";

const isLocal = process.env.NODE_ENV === 'development';

const baseURL = isLocal
    ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_API_BASE_URL_VERSEL;

const axiosInstance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
});

export const addCar = async (car: ICar) => {
    const path =  "/cars/api";
    const response = await axiosInstance.post(path, car);
    return response.data;
};
