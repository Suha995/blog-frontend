import "./footer.scss";
import { useState, useEffect } from "react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <span>Daily Blog</span>
        </div>
        <span>Made with love &hearts; </span>
      </div>
    </div>
  );
};

export default Footer;
