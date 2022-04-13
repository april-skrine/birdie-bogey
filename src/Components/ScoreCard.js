import React from "react";

function ScoreCard({ round }) {
  return (
    // <div>
    //   <div>
    //     <p>Course: {round.course}</p>
    //     <p>Par: {round.total_par}</p>
    //     <p>Total Strokes: {round.total_score}</p>
    //     <p>Score: {!!round.total_score ? round.total_score : 'Even'}</p>
    //   </div>
    // </div>

    <div class="container">
      <div class="card">
        <h2>{round.course}</h2>
        <h3>Course Par: {round.total_par}</h3>
        <hr />
        <p>Score: {!!round.total_score ? round.total_score : "Even"}</p>
      </div>
    </div>
  );
}

export default ScoreCard;
