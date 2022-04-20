import React, { useState } from "react";
import moment from "moment";

function TeeCard({ user, teetime, formatDate }) {
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [openSpots, setOpenSpots] = useState(teetime.open_spots);
  const [viewPlayers, toggleViewPlayers] = useState(false)

  const toggleState = () => {
    toggleViewPlayers(!viewPlayers)
  }
console.log(teetime)
  const joinTeeTime = () => {
    if (teetime.open_spots > 0) {
      const newUTT = { user_id: user.id, tee_time_id: teetime.id };
      fetch(`/user_tee_times`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUTT),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            const newArray = [...joinedUsers, user.name];
            setJoinedUsers(newArray);
            setOpenSpots(data.open_spots);
          });
        } else {
          alert("You already joined this tee time!");
        }
      });
    } else {
      alert("Sorry, all spots have been filled!");
    }
  };

  return (
    <div className="tee-card">
      <h3>
        <img
          src="https://res.cloudinary.com/april-skrine/image/upload/v1650039341/birdie.bogey/mini-golf-meta_ub9xyh.png"
          alt="tiny golf ball"
          style={{ height: "30px", width: "30px" }}
        />
        {teetime.golf_course}
      </h3>
      <div style={{ marginLeft: "30px" }}>
        <p>{teetime.location}</p>
        <p>{formatDate(teetime.date)}</p>
        <p>
          {moment(teetime.time).format("h:mm a")}, {teetime.number_of_holes}{" "}
          holes
        </p>
        <p>Spots available: {openSpots}</p>
        <p
          style={{
            textAlign: "right",
            fontStyle: "italic",
            marginRight: "40px",
          }}
        >
          posted by: {teetime.user.name}
        </p>
        <div style={{fontFamily: 'just another hand', color: "#29923e"}}>{viewPlayers ? teetime.players.map((p) => <p>{p}</p>) : null }</div>
        {joinedUsers.map((u) => (
          <p style={{ color: "#29923e" }} key={u.id}>
            {u} joined!
          </p>
        ))}
      </div>
      <button className="tee-button" onClick={joinTeeTime}>
        Join Tee Time
      </button>
      <button className="tee-button" onClick={toggleState}>
        Show Players
      </button>
    </div>
  );
}

export default TeeCard;
