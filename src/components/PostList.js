import "./home.scss";
import { Link } from "react-router-dom";
function PostList(props) {
  const posts = props.posts;
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post._id}>
              <div className="description">
                <Link to={"/single/" + post._id}>
                  <h2>{post.title}</h2>
                  <p>{post.desc}</p>
                  <button>Read more</button>
                </Link>
              </div>
              <div className="img">
                {post.photo && <img src={post.photo} alt="" />}
              </div>
            </div>
          );
        })}
    </>
  );
}

export default PostList;
