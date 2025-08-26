
import {ICar} from "@/models/ICar";
import axios from "axios";
const endpoint="http://localhost:3000"


const axiosInstance = axios.create({
   baseURL: endpoint,
   headers: {'Content-Type': 'application/json'},
})

export const getAllCars= async (): Promise<ICar[]> => {
  const response= await axiosInstance.get("/cars/api")
   return response.data
}
