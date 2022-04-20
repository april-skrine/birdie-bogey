import React from "react";
import ScoreCard from "./ScoreCard";

function UserScores({ user, formatDate, userScores }) {

  return (
    <div className="scores-flex">
      {user &&
        userScores
          .map((round, i) => <ScoreCard round={round} key={i} formatDate={formatDate}/>)
          .reverse()
          .splice(0, 5)}
      {/* splice will return what is removed */}
    </div>
  );
}

export default UserScores;
