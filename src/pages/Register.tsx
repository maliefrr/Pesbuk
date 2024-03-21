import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Logo from "@/assets/logo-pesbuk.png"
import { useState } from "react"
import { Link } from "react-router-dom"


const Register = () => {
  const [date,setDate] = useState<Date>()
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
              <form action="">
                <div className="mb-3">
                  <Input placeholder="Full Name" id="fullName"/>
                </div>
                <div className="mb-3">
                  <Input placeholder="Email" id="email"/>
                </div>
                <div className="mb-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-between flex-row-reverse text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PP") : <span>Date of Birth</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        captionLayout="dropdown-buttons"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        fromYear={1940}
                        toYear={2030}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-3">
                  <Input placeholder="Password" id="password" type="password"/>
                </div>
                <div className="mb-3">
                  <Input placeholder="Password Confirmation" id="passwordConfirmation" type="password"/>
                </div>
                <div className="text-center mt-3">
                  <Button className="mt-3 bg-[#306BC7] hover:bg-[#3360aa] duration-500" type="submit">Register</Button>
                </div>
                <div className="text-center mt-3">
                  <p>Already have an account? <Link to="/login" className="hover:text-[#306BC7] duration-500">Login</Link></p>
                </div>
              </form>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Register
