import "./home.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PostList from "./PostList.js";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [category, setCategory] = useState("");
  let url = "http://localhost:5000/api/posts";

  useEffect(() => {
    // url = category === "" ? url : url + "?category=" + category;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="home">
      {/* <div className="categories">
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="technology">Technology</option>
        </select>
      </div> */}
      <div className="posts">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
