import {IUser} from "@/models/IUser";
import {endpointUsers} from "@/services/users_service";



export const getUserById = async (id:string):Promise<IUser>=> {
    const url=`${endpointUsers}/${id}`;
    const response = await fetch(url)
    if (!response.ok) {
                throw new Error(
               `Error fetching user with id ${id}: ${response.statusText}`
        )
    }
   return await response.json();



}
