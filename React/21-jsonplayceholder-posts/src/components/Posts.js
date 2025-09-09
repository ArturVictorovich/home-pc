import {useState} from "react"
import Post from "./Post"
import {useEffect} from "react"

function Posts() {
  const API_URL = "https://jsonplaceholder.typicode.com//posts"

  const [post, setPosts] = useState([])
  const [err, setErr] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch(API_URLсщ)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setPosts(json)
      })
      .catch((err) => setErr(err.message))
      .finally(() => setIsLoading(false))
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
