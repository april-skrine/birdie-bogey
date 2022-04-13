import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. grab the inputs from the user and store them as key/value pairs
// 2. Tally the score of the round
// 3. Send it as an object post to the backend to store score data

function NineHoles({ user, userScores, setUserScores }) {
  const [courseName, setCourseName] = useState("");
  const [userDate, setUserDate] = useState(0);
  const [holeOne, setHoleOne] = useState(0);
  const [holeTwo, setHoleTwo] = useState(0);
  const [holeThree, setHoleThree] = useState(0);
  const [holeFour, setHoleFour] = useState(0);
  const [holeFive, setHoleFive] = useState(0);
  const [holeSix, setHoleSix] = useState(0);
  const [holeSeven, setHoleSeven] = useState(0);
  const [holeEight, setHoleEight] = useState(0);
  const [holeNine, setHoleNine] = useState(0);
  const [parOne, setParOne] = useState(0);
  const [parTwo, setParTwo] = useState(0);
  const [parThree, setParThree] = useState(0);
  const [parFour, setParFour] = useState(0);
  const [parFive, setParFive] = useState(0);
  const [parSix, setParSix] = useState(0);
  const [parSeven, setParSeven] = useState(0);
  const [parEight, setParEight] = useState(0);
  const [parNine, setParNine] = useState(0);
  const navigate = useNavigate();

  const logNewScoreNine = (e) => {
    const totalStrokes =
      holeOne +
      holeTwo +
      holeThree +
      holeFour +
      holeFive +
      holeSix +
      holeSeven +
      holeEight +
      holeNine;
    const totalPar =
      parOne +
      parTwo +
      parThree +
      parFour +
      parFive +
      parSix +
      parSeven +
      parEight +
      parNine;
    const totalScore = totalStrokes - totalPar;
    const newRoundScore = {
      course: courseName,
      eighteen_holes: false,
      date: userDate,
      total_strokes: totalStrokes,
      total_par: totalPar,
      total_score: totalScore,
      user_id: user.id,
    };
    fetch("/round_scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRoundScore),
    }).then((r) => r.json());
    const newArray = [...userScores, newRoundScore];
    setUserScores(newArray);
    alert("Round saved successfully!");
    navigate("/scores");
  };

  return (
    <div>
      <h2 style={{ fontFamily: "zilla slab", color: "#29923e" }}>
        course name:
      </h2>
      <input
        type="text"
        name="course name"
        onChange={(e) => setCourseName(e.target.value)}
      ></input>
      <h2 style={{ fontFamily: "zilla slab", color: "#29923e" }}>
        date played:
      </h2>
      <input
        type="date"
        name="date"
        onChange={(e) => setUserDate(e.target.value)}
      ></input>
      <p></p>
      <div className="table-scroll">
        <table style={{ fontFamily: "zilla slab", border: "4px solid white" }}>
          <tr>
            <td style={{ fontFamily: "zilla slab", fontSize: "25px" }}>hole</td>
            <td style={{ fontFamily: "zilla slab", fontSize: "25px" }}>par</td>
            <td style={{ fontFamily: "zilla slab", fontSize: "25px" }}>
              strokes
            </td>
          </tr>
          <tr>
            <td>one</td>
            <td>
              <form id="form1">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form1"
                type="number"
                name="par1"
                onChange={(e) => setParOne(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form1"
                type="number"
                name="score1"
                onChange={(e) => setHoleOne(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>two</td>
            <td>
              <form id="form2">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form2"
                type="number"
                name="par2"
                onChange={(e) => setParTwo(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form2"
                type="number"
                name="score2"
                onChange={(e) => setHoleTwo(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>three</td>
            <td>
              <form id="form3">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form3"
                type="number"
                name="par3"
                onChange={(e) => setParThree(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form3"
                type="number"
                name="score3"
                onChange={(e) => setHoleThree(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>four</td>
            <td>
              <form id="form4">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form4"
                type="number"
                name="par4"
                onChange={(e) => setParFour(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form4"
                type="number"
                name="score4"
                onChange={(e) => setHoleFour(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>five</td>
            <td>
              <form id="form5">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form5"
                type="number"
                name="par5"
                onChange={(e) => setParFive(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form5"
                type="number"
                name="score5"
                onChange={(e) => setHoleFive(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>six</td>
            <td>
              <form id="form6">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form6"
                type="number"
                name="par6"
                onChange={(e) => setParSix(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form6"
                type="number"
                name="score6"
                onChange={(e) => setHoleSix(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>seven</td>
            <td>
              <form id="form7">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form7"
                type="number"
                name="par7"
                onChange={(e) => setParSeven(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form7"
                type="number"
                name="score7"
                onChange={(e) => setHoleSeven(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>eight</td>
            <td>
              <form id="form8">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form8"
                type="number"
                name="par8"
                onChange={(e) => setParEight(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form8"
                type="number"
                name="score8"
                onChange={(e) => setHoleEight(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>nine</td>
            <td>
              <form id="form9">
                <input type="hidden" name="id" />
              </form>
              <input
                form="form9"
                type="number"
                name="par9"
                onChange={(e) => setParNine(parseInt(e.target.value))}
              />
            </td>
            <td>
              <input
                form="form9"
                type="number"
                name="score9"
                onChange={(e) => setHoleNine(parseInt(e.target.value))}
              />
            </td>
          </tr>
        </table>
        <button
          style={{
            backgroundColor: "#29923e",
            marginTop: "10px",
            border: "4px solid white",
            fontFamily: "just another hand",
            fontSize: "40px",
            color: "white",
          }}
          onClick={(e) => logNewScoreNine(e)}
        >
          save round!
        </button>
      </div>
    </div>
  );
}

export default NineHoles;
