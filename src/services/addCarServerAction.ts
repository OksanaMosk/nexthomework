'use server'
import {redirect} from "next/navigation";
const baseUrl=process.env.NEXT_PUBLIC_API_BASE_URL;

export const saveAction = async (formData:FormData):Promise<void> => {
const brand=formData.get('brand');
const price=formData.get('price');
const year=formData.get('year');
const responce=await fetch(`${baseUrl}/cars`, {
    method: 'POST',
    headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify({brand, price, year})
});
if(!responce){
    throw new Error('Car was not added');
}
    redirect('/cars');
};
