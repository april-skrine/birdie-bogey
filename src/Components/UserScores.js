import React from "react";
import ScoreCard from "./ScoreCard";

function UserScores({userScores, user}) {

  console.log(user)
  console.log(userScores)

  return (
    <div>
      <div>{user && user.round_scores.map((round, i) => <ScoreCard round={round} key={i}/>).reverse().splice(0,5)}</div>
      {/* splice will return what is removed */}
    </div>
  );
}

export default UserScores;
