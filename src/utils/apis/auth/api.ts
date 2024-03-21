import axiosWithConfig from "../axiosWithConfig";
import { LoginBodyType,RegisterBodyType } from "./type";

export const registerUser = async (body: RegisterBodyType) => {
    try {
        const response = await axiosWithConfig.post("/register", body)

        return response.data as Response
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}

export const loginUser = async (body: LoginBodyType) => {
    try {
        const response = await axiosWithConfig.post("/login", body)

        return response.data as Response
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}