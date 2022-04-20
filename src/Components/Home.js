import React from "react";

function Home({ user, formatDate }) {
  console.log(user);

  const lastElement = user.round_scores[user.round_scores.length - 1];

  console.log(lastElement);

  const whatToSay = () => {
    if (lastElement === undefined) {
      return "Can't give you suggestions if you don't play!";
    } else if (lastElement.total_score > 0) {
      return "Let's work on getting some strokes off.";
    } else if (lastElement.total_score == 0) {
      return "Not bad! You scored even.";
    } else if (lastElement.total_score < 0) {
      return "Impressive! You were under par.";
    }
  };

  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "just another hand",
              color: "#29923e",
              fontSize: "100px",
            }}
          >
            welcome to bb, {user && user.name}!
          </h1>
          <h1>
            {lastElement ? (
              <p>
                You last played ${lastElement.course} on
                {formatDate(lastElement.date)}
              </p>
            ) : (
              `You haven't logged a round yet!`
            )}
          </h1>
          <h2 style={{ color: "#29923e", fontFamily: "zilla slab" }}>
            {user && whatToSay()}
          </h2>
        </div>
        <div className="ball-img">
          <img
            id="rotate-golf-ball"
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649173862/birdie.bogey/golfballmenu-removebg-preview_ovqmcp.png"
            alt="golf ball"
            style={{ marginTop: "420px" }}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1650398694/birdie.bogey/hole2-removebg-preview_ju0rgn.png"
            alt="hole"
            style={{ position: "absolute", left: "1200px", marginTop: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
