import {IUser} from "@/models/IUser";

export const endpointUsers=process.env.NEXT_PUBLIC_API_BASE_URL + '/users'

export const getAllUsers = async (): Promise<IUser[]> => {
return await fetch(endpointUsers)
        .then(value => value.json())

}
