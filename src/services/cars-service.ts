import { ICar } from "@/models/ICar";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllCars = async (): Promise<ICar[]> => {
    try {
        const response = await fetch(`${baseUrl}/cars`, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data: ICar[] = await response.json();
        return data;
    } catch (error) {
        return [];
    }
};
