import * as z from "zod"

export const registerSchema = z.
    object({
        fullname: z.string().min(1, {message: "Full Name is Required"}),
        email: z.string().min(1, {message: "Email is required"}).email({message: "Not a valid email"}),
        birthday: z.date({required_error: "Birthday is required"}).min(new Date("1940-01-01"), {message: "Date cannot be less than 1940-01-01"}),
        password: z.string().min(8, {message: "Password at least have 8 characters"}).max(20, {message: "Password cannot exceed 20 characters."}),
        passwordConfirmation: z.string().min(1, "Password Confirmation is required")
    }).refine((data) => data.password === data.passwordConfirmation,{
        message: "Password and Password Confirmation did not match",
        path: ["passwordConfirmation"]
    })

export const loginSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}),
    password: z.string().min(1, {message: "Password is required"})
})


export type RegisterSchema = z.infer<typeof registerSchema>
export type LoginSchema = z.infer<typeof loginSchema>