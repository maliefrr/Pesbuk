import { useParams } from "react-router-dom"

const PostDetail = () => {
    const params = useParams()
  return (
    <div>
      <p>Post Detail Pages with id {params.id}</p>
    </div>
  )
}

export default PostDetail
