import axios from "axios";
import { NextResponse } from "next/server";

const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET() {
    const response = await axios.get(`${endpoint}/cars`);
    return NextResponse.json(response.data);
}

export async function POST(request: Request) {
    const car = await request.json();
    const response = await axios.post(`${endpoint}/cars`, car);
    return NextResponse.json(response.data);
}








