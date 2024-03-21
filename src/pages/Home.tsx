import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon, Image } from "lucide-react"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 w-2/4 h-full flex flex-col mx-auto gap-10">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-1 gap-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                User1
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"></p>
            <img className="object-contain h-100 w-full" src="https://picsum.photos/300/150" alt="pesbuk" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
            <div className="flex flex-1 gap-5 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                User2
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Lorem Ipsum</p>
            <img className="object-contain h-100 w-full" src="https://picsum.photos/300/150" alt="pesbuk" />
          </CardContent>
        </Card>
      </div>
      <AlertDialog>
        <AlertDialogTrigger className="">
          <Button className="bg-[#3360aa] rounded-full p-2 fixed bottom-5 right-5 mr-8 shadow-lg"><PlusIcon></PlusIcon></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-between items-center">
              <AlertDialogTitle>Add Post</AlertDialogTitle>
              <AlertDialogCancel className="bg-red-500 text-white hover:bg-red-600 duration-500">X</AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogDescription>
              <div className="flex flex-1 gap-5 items-start">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                <form action="">
                  <div className="mb-3">
                    <div className="relative w-full min-w-[200px]">
                      <textarea placeholder="What's happening?"
                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" cols={200} rows={5}></textarea>
                    </div>
                  </div>
                  <label htmlFor="upload" className="flex flex-col gap-2 cursor-pointer">
                    <Image></Image>
                  </label>
                  <input id="upload" type="file" className="hidden" />
                  <div className="text-end mt-3">
                    <Button className="mt-3 bg-blue-600 px-8" type="submit">Post</Button>
                  </div>
                </form>
              </div>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Home
