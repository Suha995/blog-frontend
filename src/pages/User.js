import { Context } from "../context/Context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Menu from "../components/Menu";
import "./user.scss";

const photoslocation = "/images/";
const User = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date().now + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        const res = await axios.post("/api/upload", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    try {
      const res = await axios.put("/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SCCESS", payload: res.data });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user);
  return (
    <div className="user">
      <div className="userSettings">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          {/* <span className="settingsDeleteTitle">Delete Account</span> */}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : photoslocation + user.profilePic
              }
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit">Update</button>
          {success && (
            <span style={{ color: "green" }}>
              Profile has been updated.....
            </span>
          )}
        </form>
      </div>

      <div className="aside">
        <Menu />
      </div>
    </div>
  );
};
export default User;
