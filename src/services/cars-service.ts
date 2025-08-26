
import {ICar} from "@/models/ICar";
import axios from "axios";

const isLocal = process.env.NODE_ENV === 'development';

const baseURL = isLocal
    ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_API_BASE_URL_VERSEL;

const axiosInstance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
});

export const getAllCars = async (): Promise<ICar[]> => {
    const path = isLocal ? "/cars/api" : "/cars";
    const response = await axiosInstance.get(path);
    return response.data;
};
