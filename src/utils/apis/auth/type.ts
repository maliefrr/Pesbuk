export interface RegisterBodyType {
    fullname: string;
    email: string;
    birthday: string;
    password: string;
}

export interface LoginBodyType {
    email: string;
    password: string;
}

export interface LoginResponse {
    code: number;
    message: string;
    data : {
        fullname: string;
        token: string;
        avatar: string;
    }
}