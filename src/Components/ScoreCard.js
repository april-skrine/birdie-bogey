import React from "react";

function ScoreCard({ round, formatDate}) {

  return (
    <div className="scores-card">
      <div className="scores-header">
        <h2>{round.course}</h2>
      </div>
      <div className="scores-container">
        <h3>{formatDate(round.date)}</h3>
        <p>{round.eighteen_holes ? "18 holes" : "9 holes"} played</p>
        <hr className="style-two" />
        <h3>Course Par: {round.total_par}</h3>
        <p>Score: {!!round.total_score ? round.total_score : "Even"}</p>
      </div>
    </div>
  );
}

export default ScoreCard;
