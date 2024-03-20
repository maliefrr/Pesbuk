import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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
    </div>
  )
}

export default Home
