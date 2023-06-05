import axios from "axios"
import { UserSignupFormType, UserFormType } from "../types/user"

// TODO: change baseURL before release
const serverApi = axios.create({
    baseURL: "http://localhost:3000"
})

// TODO: replace placeholders
export const userSignup = async (data: UserSignupFormType) => {
    const response = await serverApi.post("PLACEHOLDER", data)
    return response
}

export const userLogin = async (data: UserFormType) => {
    const response = await serverApi.post("PLACEHOLDER", data)
    return response
}