import "./categories.scss";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const categoriesUrl = "/api/category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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
    <div className="categories">
      {categories && (
        <ul>
          {categories.map((cat) => {
            return (
              <li key={cat._id}>
                <NavLink to={`/?cat=${cat.name}`}>{cat.name}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Categories;
