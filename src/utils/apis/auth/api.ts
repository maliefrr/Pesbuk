import { IResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema, RegisterSchema } from "./type";

export const registerUser = async (body : RegisterSchema) => {
    try {
        const response = await axiosWithConfig.post("/register", body)

        return response.data as IResponse
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}

export const loginUser = async (body: LoginSchema) => {
    try {
        const response = await axiosWithConfig.post("/login", body)

        return response.data as IResponse
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}