import React from "react";
import { Link } from "react-router-dom";

function NotLoggedIn() {
  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <div className="lander-logo">
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649444503/birdie.bogey/errorpage_uxtaki.jpg"
            alt="not logged in"
          />
        </div>
        <div className="lander-menu-flex">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="lander-menu">{`<< back`}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotLoggedIn;
