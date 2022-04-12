import React from "react";
import { Link } from "react-router-dom";

function Scratchpad() {
  
  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <img src="https://res.cloudinary.com/april-skrine/image/upload/v1649796302/birdie.bogey/newround-removebg-preview_texmkf.png" alt="log round"/>
        <div className="lander-menu-flex">
          <Link to="/eighteenholes" style={{ textDecoration: "none" }}>
            <div className="lander-menu">18 Holes</div>
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
          <Link to="/nineholes" style={{ textDecoration: "none" }}>
            <div className="lander-menu">9 Holes</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scratchpad;
