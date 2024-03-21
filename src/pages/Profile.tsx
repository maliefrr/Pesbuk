import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { toast } from "sonner"


const Profile = () => {
  const [date,setDate] = useState<Date>()
  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center font-inter">
        <Card className="p-8 w-[70%] shadow-lg backdrop-blur-xl bg-white border-none lg:w-[70%] md:w-[70%]">
          <CardContent className="flex w-full">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src="https://github.com/shadcn.png" alt="" className="w-2/5 rounded-full"/>
              <Button className="w-1/3 bg-[#306BC7] hover:bg-[#3360aa] duration-500">Edit</Button>
            </div>
            <div className="w-1/2">
                <Input placeholder="Nama" className="mb-4"/>
                <Input placeholder="Email" className="mb-4"/>
                <Input placeholder="Tempat Lahir" className="mb-4"/>
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
                          {date ? format(date, "PP") : <span>Tanggal Lahir</span>}
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
                <Input placeholder="Password" className="mb-4"/>
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
                        <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600 duration-500" onClick={() => toast("The Account has been successfully deleted")}>Delete Account</AlertDialogAction>
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
                        <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600 duration-500" onClick={() => toast("Successfully Logout")}>Logout</AlertDialogAction>
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
