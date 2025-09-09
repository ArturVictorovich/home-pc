import "./Post.css";

function Post({body, userId, title}) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{userId}</p>
      <h2>{body}</h2>
    </div>
  );
}

export default Post;
