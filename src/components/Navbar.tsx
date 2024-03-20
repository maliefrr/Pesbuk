import { Link } from "react-router-dom"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Logo from "@/assets/logo-pesbuk.png"




const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#306BC7] backdrop-blur supports-[backdrop-filter]:bg-[#306BC7] px-5">
      <nav className="container flex min-h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="text-2xl"><img src={Logo} alt="" className="h-12"/></Link>
        <a href="">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link to="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link to="/register">Register</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </a>
      </nav>
    </div>
  )
}

export default Navbar
