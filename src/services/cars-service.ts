import { ICar } from "@/models/ICar";

export const getAllCars = async (): Promise<ICar[]> => {
    const isLocal = process.env.NODE_ENV === "development";

    const baseURL = isLocal
        ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
        : process.env.NEXT_PUBLIC_API_BASE_URL;

    const path = isLocal
    ? "/cars/api"
        : "/cars"

    try {
        const response = await fetch(`${baseURL}${path}`, {
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 1 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ICar[] = await response.json();
        return data;
    } catch (error) {
        return [];
    }
};
