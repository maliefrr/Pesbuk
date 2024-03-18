import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"


const Register = () => {
  const [date,setDate] = useState<Date>()
  return (
    <div className="bg-[#7289DA]">
      <div className="flex items-center justify-center">
        <Card className="p-5 w-[80%] shadow-md bg-opacity-30 backdrop-blur-xl bg-white border-none lg:w-[30%] md:w-[40%]">
          <CardContent>
            <CardHeader><h1 className="text-center text-2xl">Register</h1></CardHeader>
            <CardDescription>
              <form action="">
                <div className="mb-3">
                  <Label htmlFor="fullName">Nama Lengkap</Label>
                  <Input placeholder="Full Name" id="fullName"/>
                </div>
                <div className="mb-3">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Email" id="email"/>
                </div>
                <div className="mb-3">
                  <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                  <Input placeholder="Tempat Lahir" id="tempatLahir"/>
                </div>
                <div className="mb-3">
                  <Label>Tanggal Lahir</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="mb-3">
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="Password" id="password" type="password"/>
                </div>
                <div className="mb-3">
                  <Label htmlFor="passwordConfirmation">Password</Label>
                  <Input placeholder="Password Confirmation" id="passwordConfirmation" type="password"/>
                </div>
                <div className="text-center mt-3">
                  <Button className="mt-3" type="submit">Register</Button>
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
