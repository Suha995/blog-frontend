import "./home.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [category, setCategory] = useState("all");
  const url = "http://localhost:8000/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="home">
      <div className="categories">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="tech">Technology</option>
        </select>
      </div>
      <div className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="description">
                  <Link to={"/single/:" + post.id}>
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
      <div className="menus"></div>
    </div>
  );
};

export default Home;

// const posts = [
//   {
//     id: 0,
//     title: " Lorem ipsum dolor sit",
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
//     quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
//     doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
//     author: "JACK",
//     img: "images/image-01.jpg",
//   },
//   {
//     id: 1,
//     title: " Lorem ipsum dolor sit",
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
//     quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
//     doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
//     img: "images/image-02.jpg",
//   },
//   {
//     id: 2,
//     title: " Lorem ipsum dolor sit",
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
//     quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
//     doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
//     img: "images/image-03.jpg",
//   },
//   {
//     id: 4,
//     title: " Lorem ipsum dolor sit",
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
//     quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
//     doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
//     img: "images/image-04.jpg",
//   },
// ];
