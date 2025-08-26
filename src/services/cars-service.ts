
import {ICar} from "@/models/ICar";
import axios from "axios";
const endpoint=process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL


const axiosInstance = axios.create({
   baseURL: endpoint,
   headers: {'Content-Type': 'application/json'},
})

export const getAllCars= async (): Promise<ICar[]> => {
  const response= await axiosInstance.get("/cars/api")
   return response.data
}
