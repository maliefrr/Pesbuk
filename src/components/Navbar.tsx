import { Link } from "react-router-dom"
// import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
//   } from "@/components/ui/avatar"
import Logo from "@/assets/logo-pesbuk.png"




const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#306BC7] backdrop-blur supports-[backdrop-filter]:bg-[#306BC7] px-5">
      <nav className="container flex min-h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="text-2xl"><img src={Logo} alt="" className="h-12"/></Link>
        <Link to="/login" className="text-white">Login</Link>
        {/* <Avatar>
            <AvatarImage src=""/>
            <AvatarFallback>Login</AvatarFallback>
          </Avatar> */}
      </nav>
    </div>
  )
}

export default Navbar
