import { ICar } from "@/models/ICar";
import axios, { AxiosError } from "axios";

const isLocal = process.env.NODE_ENV === "development";

const baseURL = isLocal
    ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_API_BASE_URL_VERSEL;

const axiosInstance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
});

export const getAllCars = async (): Promise<ICar[]> => {
    const path = "/cars/api";

    try {
        const response = await axiosInstance.get(path);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            console.error("Failed to fetch cars:", {
                message: axiosError.message,
                status: axiosError.response?.status,
                url: `${baseURL}${path}`,
            });
        } else {
            console.error("Unknown error fetching cars:", error);
        }

        return [];
    }
};
