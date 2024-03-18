import { Link } from "react-router-dom"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#7289DA]/95 backdrop-blur supports-[backdrop-filter]:bg-[#7289DA]/60 px-5">
      <nav className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="text-2xl">🅿</Link>
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
