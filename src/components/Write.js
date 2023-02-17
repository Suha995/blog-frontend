import "./write.scss";
import Menu from "./Menu";
const Write = () => {
  return (
    <div className="write">
      <form className="edit">
        <input type="text" placeholder="Title..." />
        <textarea placeholder="Write your thoughts...."></textarea>
        <div className="category">
          <label htmlFor="cat"> Choose category for your blog</label>
          <select id="cat" placeholder="Choose category for your blog">
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
