import React from "react";
import moment from "moment";

function TeeCard({ teetime, formatDate }) {
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
        <p>{moment(teetime.time).format("h:mm a")}, {teetime.number_of_holes} holes</p>
        <p style={{ textAlign: "right" }}>posted by: {teetime.user.name}</p>
      </div>
    </div>
  );
}

export default TeeCard;
