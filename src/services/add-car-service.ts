import axios from "axios";
import {ICar} from "@/models/ICar";

const postEndpoint=process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL

const axiosInstance = axios.create({
    baseURL: postEndpoint,
    headers: {'Content-Type': 'application/json'},
})

export const addCar= async (car:ICar)=> {
    const response= await axiosInstance.post("/cars/api", car)
    return response.data;
}
