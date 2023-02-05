import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 0,
      title: " Lorem ipsum dolor sit",
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
      quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
      doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
      author: "JACK",
      img: "images/image-01.jpg",
    },
    {
      id: 1,
      title: " Lorem ipsum dolor sit",
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
      quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
      doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
      author: "JACK",
      img: "images/image-02.jpg",
    },
    {
      id: 2,
      title: " Lorem ipsum dolor sit",
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
      quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
      doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
      author: "JACK",
      img: "images/image-03.jpg",
    },
    {
      id: 4,
      title: " Lorem ipsum dolor sit",
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi vero
      quas fugiat recusandae quaerat aperiam delectus molestias saepe, laborum
      doloribus nisi? Esse debitis sunt rerum neque deserunt, ex consequuntur!`,
      author: "JACK",
      img: "images/image-04.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="description">
                <Link to={"/single/:" + post.id}>
                  <h2>{post.title}</h2>
                  <span>{post.author}</span>
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
