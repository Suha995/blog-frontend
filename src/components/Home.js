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
  const [cat, setCAt] = useState("");

  const handleChangeCategory = (e) => {
    e.preventDefault();
    setCAt(e.target.value);
    console.log(e.target.value);
    console.log(cat);
  };
  useEffect(() => {
    console.log(url);
    fetch(url + "/?cat=" + cat)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err.message));
  }, [cat]);

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
      {console.log(cat)}
      {categories && (
        <div className="categories">
          <select onChange={handleChangeCategory}>
            <option value={""}>Select Category</option>
            {categories.map((cat) => {
              return (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="posts">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
