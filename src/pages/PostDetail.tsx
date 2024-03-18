import Navbar from "@/components/Navbar"
import { useParams } from "react-router-dom"

const PostDetail = () => {
    const params = useParams()
  return (
    <div>
      <Navbar />
      <p>Post Detail Pages with id {params.id}</p>
    </div>
  )
}

export default PostDetail
