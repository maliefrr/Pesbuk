import { Link, useNavigate } from "react-router-dom"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Logo from "@/assets/logo-pesbuk.png"
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig"
import { toast } from "sonner"
import { getUser } from "@/utils/apis/users/api"
import { useState } from "react"
import {User, LogOut} from "lucide-react"




const Navbar = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const [avatar,setAvatar] = useState("")
  const getUserbyToken = async () => {
    try {
      setAxiosConfig(token!)
      const response = await getUser()

      setAvatar(response.data.avatar)
      localStorage.setItem("userData", JSON.stringify(response.data));
      toast(response.message)
      console.log(response)
    } catch (error) {
      toast((error as Error).message)
    }
  }
  getUserbyToken()
  return (
    <div className="sticky top-0 z-50 w-full bg-[#306BC7] backdrop-blur supports-[backdrop-filter]:bg-[#306BC7] px-5">
      <nav className="container flex min-h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="text-2xl"><img src={Logo} alt="" className="h-12"/></Link>
        {token === null ? (
          <Link to="/login" className="text-white">Login</Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={avatar}/>
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="font-bold">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="text-sm flex items-center gap-3 cursor-pointer">
                  <User /> Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className="text-sm flex items-center gap-3 text-red-600 cursor-pointer" onClick={() => {
                  localStorage.clear()
                  toast("Successfully Logout")
                  navigate("/")
                }}><LogOut /> Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </div>
  )
}

export default Navbar
