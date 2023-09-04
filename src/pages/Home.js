import "./home.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PostList from "../components/PostList";
import Menu from "../components/Menu";

const url = "/api/posts";
const Home = () => {
  const [posts, setPosts] = useState([]);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    fetch(url + location.search)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }, [location]);

  return (
    <div className="home">
      <div className="posts">
        <PostList posts={posts} />
      </div>
      <div className="aside">
        <Menu />
      </div>
    </div>
  );
};

export default Home;
