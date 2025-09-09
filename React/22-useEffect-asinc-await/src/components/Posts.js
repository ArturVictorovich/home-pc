import {useState} from "react"
import Post from "./Post"
import {useEffect} from "react"

function Posts() {
  const API_URL = "https://jsonplaceholder.typicode.com//posts"

  const [post, setPosts] = useState([])
  const [err, setErr] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async function () {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (err) {
        setErr(err.message)
      }
      setIsLoading(false)
    })()
  }, [])

  if (err) {
    return <h1>Error: {err}</h1>
  }
  return (
    <div>
      <h1>Post</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  )
}

export default Posts
