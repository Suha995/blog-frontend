import "./home.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [category, setCategory] = useState("");
  let url = "http://localhost:8000/posts";

  useEffect(() => {
    url = category === "" ? url : url + "?category=" + category;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, [category]);

  return (
    <div className="home">
      <div className="categories">
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="description">
                  <Link to={"/single/" + post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button>Read more</button>
                  </Link>
                </div>
                <div className="img">
                  <img src={post.img} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
