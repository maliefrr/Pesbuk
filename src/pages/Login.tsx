import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
  return (
    <div className="bg-[#7289DA]">
      <div className="flex items-center justify-center h-screen">
        <Card className="p-5 w-[80%] shadow-md bg-opacity-30 backdrop-blur-xl bg-white border-none lg:w-[30%] md:w-[40%]">
          <CardContent>
            <CardHeader><h1 className="text-center text-2xl">Login</h1></CardHeader>
            <CardDescription>
              <form action="">
                <div className="mb-3">
                  <Label htmlFor="email">Email</Label>
                  <Input placeholder="Email" id="email"/>
                </div>
                <div className="mb-3">
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="Password" id="password" type="password"/>
                </div>
                <div className="text-center mt-3">
                  <Button className="mt-3" type="submit">Login</Button>
                </div>
              </form>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login
