import "./home.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PostList from "./PostList.js";

const url = "http://localhost:8000/api/posts";
const categoriesUrl = "http://localhost:8000/api/category";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    console.log(url);
    fetch(url + location.search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }, [location]);

  useEffect(() => {
    fetch(categoriesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="home">
      <div className="categories">
        {categories && (
          <ul>
            {categories.map((cat) => {
              return (
                <li key={cat._id}>
                  <Link to={`/?cat=${cat.name}`}>{cat.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="posts">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
