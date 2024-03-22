import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import Pattern from "@/assets/pattern.png"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { EditUserSchema, editUserSchema } from "@/utils/apis/users/type"
import { CustomFormDatePicker, CustomFormField } from "@/components/customFormField"
import { Form } from "@/components/ui/form"
import { useNavigate } from "react-router-dom"
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig"
import { deleteUser } from "@/utils/apis/users/api"


const Profile = () => {
  const navigate = useNavigate()
  const [isEdit,setIsEdit] = useState(false)
  const userData = JSON.parse(localStorage.getItem("userData") || "[]");
  const form = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      fullname: userData.fullname,
      email: userData.email,
      birthday: userData.birthday,
      avatar: userData.avatar,
      password: ""
    }
  })
  return (
    <div style={{backgroundImage: `url(${Pattern})`}} className="h-screen">
      <Navbar />
      <div className={`p-10 flex justify-center items-center font-inter`}>
        <Card className="p-8 w-[70%] shadow-lg backdrop-blur-xl bg-white border-none lg:w-[70%] md:w-[70%]">
          <CardContent className="flex w-full">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={userData.avatar !== "" ? userData.avatar : `https://github.com/shadcn.png`} alt="" className="w-2/5 rounded-full"/>
              <Button className="w-1/3 bg-[#306BC7] hover:bg-[#3360aa] duration-500" onClick={() => setIsEdit(!isEdit)}>{isEdit === false ? "Edit" : "Save"}</Button>
            </div>
            <div className="w-1/2">
              <Form {...form}>
                <form action="">
                  <CustomFormField
                    control={form.control}
                    name="fullname"
                  >
                    {(field) => (
                      <Input 
                        placeholder="Full Name" 
                        className="mb-4"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        {...field}
                        />
                    )}
                  </CustomFormField>
                  <CustomFormField
                    control={form.control}
                    name="email"
                    >
                    {(field) => (
                      <Input 
                        placeholder="Email" 
                        className="mb-4"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        {...field}
                        />
                        )}
                  </CustomFormField>
                  <div className="mb-3">
                  <CustomFormDatePicker control={form.control} name="birthday" placeholder="Date of Birth"/>
                  </div>
                  <CustomFormField
                    control={form.control}
                    name="password"
                    >
                    {(field) => (
                      <Input 
                        placeholder="Password" 
                        className="mb-4"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        {...field}
                        />
                    )}
                  </CustomFormField>
                </form>
              </Form>
                <div className="grid grid-cols-2 mt-4 gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="outline" className="border-[#306BC7] hover:bg-[#3360aa] hover:text-white duration-500 w-full">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="flex justify-between items-center">
                          <AlertDialogTitle>Delete Account?</AlertDialogTitle>
                          <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600 duration-500">X</AlertDialogCancel>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogDescription>
                        <p className="text-justify">This action can’t be undone after you delete your account, all the data will also be permanently deleted.</p>
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600 duration-500" onClick={async () => {
                          try {
                            setAxiosConfig(localStorage.getItem("token")!)
                            const response = await deleteUser()
                            toast(response.message)
                            localStorage.clear()
                            navigate("/")
                          } catch(error) {
                            toast((error as Error).message)
                          }
                        }
                        }>Delete Account</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="destructive" className="w-full">Logout</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="flex justify-between items-center">
                          <AlertDialogTitle>Logout</AlertDialogTitle>
                          <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600 duration-500">X</AlertDialogCancel>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogDescription>
                        <p>Are you sure you want to logout? Once you confirm you must be login again</p>
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600 duration-500" onClick={() => {
                          localStorage.clear()
                          toast("Successfully Logout")
                          navigate("/")
                          }}>Logout</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Profile
