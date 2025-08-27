import { ICar } from "@/models/ICar";

export const getAllCars = async (): Promise<ICar[]> => {
    const isLocal = process.env.NODE_ENV === "development";

    const baseURL = isLocal
        ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
        : process.env.NEXT_PUBLIC_API_BASE_URL_VERSEL;

    const path = "/cars/api";

    try {
        const response = await fetch(path, {
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 3 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ICar[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch cars:", error);
        return [];
    }
};
