import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Logo from "@/assets/logo-pesbuk.png"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "@/utils/apis/auth/api"
import {toast} from "sonner"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterSchema, registerSchema } from "@/utils/apis/auth/type"
import { Form } from "@/components/ui/form"
import { CustomFormDatePicker, CustomFormField } from "@/components/customFormField"


const Register = () => {
  const navigate = useNavigate()
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      birthday: new Date(),
      password: "",
      passwordConfirmation: ""
    }
  })

  const register = async (body: RegisterSchema) => {
    try {
      const response = await registerUser(body)
      toast(response.message)
      navigate("/login")
    } catch (error) {
      toast((error as Error).message)
    }
  }
  return (
    <div className="bg-[#306BC7] font-inter">
      <div className="flex items-center justify-center h-screen">
        <Card className="p-5 w-[60%] shadow-lg backdrop-blur-xl bg-white border-none lg:w-[30%] md:w-[40%]">
          <CardContent>
            <CardHeader>
            <div className="flex flex-col justify-center items-center gap-4">
                <img src={Logo} alt="" className="w-24"/>
                <h1 className="text-3xl">Register</h1>
              </div>
            </CardHeader>
            <CardDescription>
              <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(register)}>
                  <div className="mb-3">
                    <CustomFormField
                      control={form.control}
                      name="fullname"
                    >
                      {(field) => (
                        <Input 
                          placeholder="Full Name"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                          />
                      )}
                    </CustomFormField>
                  </div>
                  <div className="mb-3">
                    <CustomFormField
                      control={form.control}
                      name="email"
                    >
                      {(field) => (
                        <Input 
                          placeholder="Email"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <div className="mb-3">
                      <CustomFormDatePicker control={form.control} name="birthday" placeholder="Date of Birth"/>
                  </div>
                  <div className="mb-3">
                    <CustomFormField
                      control={form.control}
                      name="password"
                    >
                      {(field) => (
                        <Input 
                          placeholder="Password" 
                          type="password" 
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <div className="mb-3">
                    <CustomFormField 
                      control={form.control}
                      name="passwordConfirmation"
                    >
                      {(field) => (
                        <Input 
                          placeholder="Password Confirmation" 
                          type="password" 
                          disabled={form.formState.isSubmitting} 
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                          />
                      )}
                    </CustomFormField>
                  </div>
                  <div className="text-center mt-3">
                    <Button className="mt-3 bg-[#306BC7] hover:bg-[#3360aa] duration-500" type="submit">Register</Button>
                  </div>
                  <div className="text-center mt-3">
                    <p>Already have an account? <Link to="/login" className="hover:text-[#306BC7] duration-500">Login</Link></p>
                  </div>
                </form>
              </Form>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Register
