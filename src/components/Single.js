import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./single.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="single">
      <div className="container">
        {post && (
          <div className="post">
            <div className="img">
              <img src={post.img} />
            </div>
            <div className="post-info">
              <div className="edit">
                <Link to={"/write?edit=" + id}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <Link to={"/write"}>
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </div>
              <div className="info">
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
              </div>
            </div>
            <div className="user">
              <span>{post.username}</span>
            </div>
          </div>
        )}
      </div>
      {/* <Menu className="menu"></Menu> */}
    </div>
  );
};

export default Single;
