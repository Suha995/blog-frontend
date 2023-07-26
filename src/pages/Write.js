import "./write.scss";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Write = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  //const [isAdded, setIsAdded] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  // const location = useLocation();
  // console.log(location.search);
  // if (location.search.includes("edit") === true) {
  //   setIsEdit(true);
  //   const id = location.search.split("=")[1];
  //   console.log(id);
  //   console.log("hello");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      desc: description,
      body: body,
      categories: [category],
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      console.log(file.name);
      data.append("name", filename);
      data.append("file", file);
      blog.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("http://localhost:8000/api/posts", blog);
      console.log(res);
      window.location.href = "/post/" + res.data._id;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write-container">
      <div className="write">
        {/* {isAdded && <span>New Blog has been added</span>} */}
        <form className="edit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="post-desc"
            placeholder="Description...."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            className="post-body"
            placeholder="Write your thoughts...."
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="category">
            <label htmlFor="cat"> Choose category for your blog</label>
            <select
              id="cat"
              placeholder="Choose category for your blog"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">---</option>
              <option value="food">Food</option>
              <option value="technology">Technology</option>
              <option value="science">Science</option>
            </select>
          </div>
          <div className="img-file">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="publich">
            <button>PUBLICH</button>
          </div>
        </form>

        {/* <Menu className="menu"></Menu> */}
      </div>
      <div className="aside">
        <Menu />
      </div>
    </div>
  );
}; ///

export default Write;
