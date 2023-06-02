import "./home.scss";
import { Link } from "react-router-dom";
function PostList({ posts }) {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post._id}>
              <div className="description">
                <Link to={"/post/" + post._id}>
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>
                  <span>{new Date(post.createdAt).toDateString()}</span>
                  <button>Read more</button>
                </Link>
              </div>
              {post.photo && (
                <div className="img">
                  <img src={post.photo} alt="" />
                </div>
              )}
            </div>
          );
        })}
    </>
  );
}

export default PostList;
