import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  const [posts, setPosts] = useState(null);
  let url = "http://localhost:8000/posts";
  //we fetch here form the api random posts with a limit of 3
  // or the most recent posts

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="menu">
      <h1>Other Posts you may like</h1>
      <div className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <div className="img">
                  <img src={post.img} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
