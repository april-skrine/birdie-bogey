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
        <div>recs here</div>
        <div>most recent tee time here</div>
      </div>
    </div>
  );
}

export default Home;
