import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Logo from "@/assets/logo-pesbuk.png"
import { Link, useNavigate } from "react-router-dom"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema, loginSchema } from "@/utils/apis/auth/type"
import { loginUser } from "@/utils/apis/auth/api"
import { toast } from "sonner"
import { Form } from "@/components/ui/form"
import { CustomFormField } from "@/components/customFormField"


const Login = () => {
  const navigate = useNavigate()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const login = async (body: LoginSchema) => {
    try {
      const response = await loginUser(body)
      toast(response.message)
      navigate("/")
      localStorage.setItem("token",response.data.token)
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
                <h1 className="text-3xl">Login</h1>
              </div>
            </CardHeader>
            <CardDescription>
              <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(login)}>
                  <div className="mb-3">
                    <CustomFormField
                      control={form.control}
                      name="email"
                    >
                      {(field) => (
                        <Input 
                          placeholder="Email" 
                          type="email"
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
                  <div className="text-center mt-3">
                    <Button className="mt-3 bg-[#306BC7] hover:bg-[#3360aa] duration-500" type="submit">Login</Button>
                  </div>
                  <div className="text-center mt-3">
                    <p>Don't have account yet? <Link to="/register" className="hover:text-[#306BC7] duration-500">Register</Link></p>
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

export default Login
