import "./write.scss";
// import Menu from "./Menu";
import { useState, useEffect } from "react";
const Write = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImage] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, desc: body, categories: category, photo: img };
    fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        console.log("helllooo");
        console.log(res.status);
        setIsAdded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="write">
      {isAdded && <span>New Blog has been added</span>}
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
        <div className="img-file">
          <input type="file" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="publich">
          <button>PUBLICH</button>
        </div>
      </form>

      {/* <Menu className="menu"></Menu> */}
    </div>
  );
}; ///

export default Write;
