import * as z from "zod"

export const editUserSchema = z.object({
    fullname: z.string().min(1, {message: "Full name is required"}),
    email: z.string().min(1,{message: "Email is required"}).email({message: "Not a valid email"}),
    birthday: z.date({required_error: "Birthday is required"}).min(new Date("1940-01-01"), {message: "Date cannot be less than 1940-01-01"}),
    password: z.string().min(8, {message: "Password at least have 8 characters"}).max(20, {message: "Password cannot exceed 20 characters."}),
    avatar: z.string().optional()
})

export type EditUserSchema = z.infer<typeof editUserSchema>