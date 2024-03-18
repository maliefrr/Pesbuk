import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Profile from "@/pages/Profile"
import Home from "@/pages/Home"
import PostDetail from '@/pages/PostDetail'


const router = createBrowserRouter([
       {
           path: "/login",
           element: <Login />
       },
       {
           path: "/register",
           element: <Register />
       },
       {
           path: "/",
           element: <Home/>
       },
       {
           path: "/profile",
           element: <Profile/>
       },
       {
        path: "/post/:id",
        element: <PostDetail />
       }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
