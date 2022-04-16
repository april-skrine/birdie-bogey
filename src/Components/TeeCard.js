import React, { useState } from "react";
import moment from "moment";

function TeeCard({ user, teetime, formatDate }) {
  const [joinedUsers, setJoinedUsers] = useState([]);

  const joinTeeTime = () => {
    if (teetime.open_spots > 0) {
      if (!joinedUsers.includes(user.name)) {
        teetime.open_spots --;
        const newArray = [...joinedUsers, user.name];
        const newUTT = { user_id: user.id, tee_time_id: teetime.id };
        setJoinedUsers(newArray);
        fetch(`/tee_times/${teetime.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teetime),
        })
          .then((r) => r.json())
        fetch(`/user_tee_times`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUTT),
        });
      } else {
        alert("You already joined this round!");
      }
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
        <p>Spots available: {teetime.open_spots}</p>
        <p style={{ textAlign: "right", fontStyle: "italic" }}>
          posted by: {teetime.user.name}
        </p>
        {joinedUsers.map((u) => (
          <p style={{ color: "#29923e" }} key={u.id}>
            {u} joined!
          </p>
        ))}
      </div>
      <button className="tee-button" onClick={joinTeeTime}>
        Join Tee Time
      </button>
    </div>
  );
}

export default TeeCard;
