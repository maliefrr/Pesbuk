import Navbar from "@/components/Navbar"
import { useParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const PostDetail = () => {
  const params = useParams()
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
                <p className="font-thin text-sm text-slate-600">Posted on 13 March 2024</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"></p>
            <img className="object-contain h-100 w-full" src="https://picsum.photos/300/150" alt="pesbuk" />
            <div className="mt-5 pt-5 ps-5">
              <p className="font-bold">Comments</p>

              <div className="flex flex-1 gap-5 items-center mt-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                User3
                <p className="font-thin text-xs text-slate-600">Posted on 14 March 2024</p>
              </div>
              <p className="mt-2 ms-1">Nice!!!</p>
              <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500"></hr>
              <div className="flex flex-1 gap-5 items-center mt-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                User4
                <p className="font-thin text-xs text-slate-600">Posted on 11 March 2024</p>
              </div>
              <p className="mt-2 ms-1">Cool af!!!</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex flex-1 gap-5 items-start">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="pesbuk" />
                </Avatar>
                <form action="">
                  <div className="mb-3">
                    <div className="relative w-full min-w-[200px]">
                      <textarea placeholder="Write your comment..."
                        className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" cols={200} rows={5}></textarea>
                    </div>
                  </div>
                  <div className="text-end mt-3">
                  <Button className="mt-3 bg-blue-600 px-8" type="submit">Send</Button>
                </div>
                </form>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PostDetail
