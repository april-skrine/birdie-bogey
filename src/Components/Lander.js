import React from "react";
import { Link } from "react-router-dom";

function Lander() {
  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <div className="lander-logo">
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649176250/birdie.bogey/bblogo_yzdj90.jpg"
            alt="main logo"
          />
        </div>
        <div className="lander-menu-flex">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <div className="lander-menu">signup</div>
          </Link>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649177219/birdie.bogey/clubs-removebg-preview_ekuifl.png"
            alt="golf clubs"
            style={{
              height: "150px",
              width: "150px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="lander-menu">login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lander;
