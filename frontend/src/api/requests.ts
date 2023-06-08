import axios from "axios"
import { UserSignupFormType, UserFormType } from "../types/user"

// TODO: change baseURL before release
const serverApi = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true
})


export const userSignup = async (data: UserSignupFormType) => {
    const response = await serverApi.post("/register", data)
    return response.data
}

export const userLogin = async (data: UserFormType) => {
    const response = await serverApi.post("/login", data)
    return response.data
}

export const userLogout = async () => {
    const response = await serverApi.post("/logout", {});
    return response.data
}

export const userAuth = async () => {
    const response = await serverApi.get("/auth", {});
    return response.data
}

export const getAllPublishers = async () => {
    const response = await serverApi.get("/publisher", {})
    return response.data
}

export const getNewspapers = async (publisherId: string, title: string) => {
    let url = "/newspaper";
    if (publisherId && title) {
        url += "/" + publisherId + "/" + title;
    } else if (publisherId) {
        url += "/publisher=/" + publisherId;
    } else if (title) {
        url += "/name=/" + title;
    } 
    
    const response = await serverApi.get(url, {})
    return response.data
}