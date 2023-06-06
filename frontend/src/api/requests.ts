import axios from "axios"
import { UserSignupFormType, UserFormType } from "../types/user"

// TODO: change baseURL before release
const serverApi = axios.create({
    baseURL: "http://localhost:3000",
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

export const useraAuth = async () => {
    const response = await serverApi.get("/auth", {});
    return response.data
}