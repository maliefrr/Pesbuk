import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Logo from "@/assets/logo-pesbuk.png"
// import { Label } from "@/components/ui/label"

const Login = () => {
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
              <form action="">
                <div className="mb-3">
                  <Input placeholder="Email" id="email"/>
                </div>
                <div className="mb-3">
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
