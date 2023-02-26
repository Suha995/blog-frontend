import "./write.scss";
import Menu from "./Menu";
import { useState, useEffect } from "react";
const Write = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const blog = { title, body, category };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog added");
    });
  };

  useEffect(() => {
    console.log(title);
    console.log(body);
    console.log(category);
  }, [title, body, category]);
  return (
    <div className="write">
      <form className="edit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
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
        <div className="publich">
          <button>PUBLICH</button>
        </div>
      </form>

      <Menu className="menu"></Menu>
    </div>
  );
};

export default Write;
