import { ICar } from "@/models/ICar";

export const getAllCars = async (): Promise<ICar[]> => {
    const isLocal = process.env.NODE_ENV === "development";

    const baseURL = isLocal
        ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
        : process.env.NEXT_PUBLIC_API_BASE_URL_VERSEL;

    const path = "/cars/api";

    try {
        await fetch("/cars/api", {
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 3 },
        });
        // const response = await fetch(`${baseURL}${path}`, {
        //     headers: { "Content-Type": "application/json" },
        //     next: { revalidate: 3 },
        // });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("Fetching cars from:", `${baseURL}${path}`);
        const data: ICar[] = await response.json();
        console.log("Fetched cars:", data);
        console.log("🚗 getAllCars() called");
        console.log("🧠 Сторінка з сервера завантажує автівки", data.length);
        return data;

    } catch (error) {
        console.error("Failed to fetch cars:", error);
        return [];
    }
};
