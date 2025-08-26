import axios from "axios";
import {ICar} from "@/models/ICar";

const postEndpoint="http://localhost:3000"

const axiosInstance = axios.create({
    baseURL: postEndpoint,
    headers: {'Content-Type': 'application/json'},
})

export const addCar= async (car:ICar)=> {
    const response= await axiosInstance.post("/cars/api", car)
    return response.data;
}
