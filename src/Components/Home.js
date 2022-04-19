import React from "react";

function Home({ user }) {
  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <div>
          <h1
            style={{
              fontFamily: "just another hand",
              color: "#29923e",
              fontSize: "100px",
            }}
          >
            welcome to bb, {user && user.name}!
          </h1>
        </div>
        <div className="ball-img">
          <img
            id="rotate-golf-ball"
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649173862/birdie.bogey/golfballmenu-removebg-preview_ovqmcp.png"
            alt="golf ball"
            style={{marginTop: '300px'}}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1650398694/birdie.bogey/hole2-removebg-preview_ju0rgn.png"
            alt="hole"
            style={{position: 'absolute', left: '1200px', marginTop: '300px'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
