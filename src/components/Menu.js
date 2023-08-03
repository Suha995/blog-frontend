import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  const [posts, setPosts] = useState(null);
  let url = "/api/posts/?limit=2";
  const photosLocation = "/images/";
  //we fetch here form the api random posts with a limit of 3
  // or the most recent posts

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="menu">
      <h1>Posts you may like</h1>
      <div className="posts-menu">
        {posts &&
          posts.map((post) => {
            return (
              <Link to={`/post/${post._id}`}>
                <div className="post-menu" key={post._id}>
                  <h2>{post.title}</h2>
                  <img src={photosLocation + post.photo} />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
