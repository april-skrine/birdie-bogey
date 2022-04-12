import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. grab the inputs from the user and store them as key/value pairs
// 2. Tally the score of the round
// 3. Send it as an object post to the backend to store score data

function EighteenHoles({ user, userScores, setUserScores}) {
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
  const [holeTen, setHoleTen] = useState(0);
  const [holeEleven, setHoleEleven] = useState(0);
  const [holeTwelve, setHoleTwelve] = useState(0);
  const [holeThirteen, setHoleThirteen] = useState(0);
  const [holeFourteen, setHoleFourteen] = useState(0);
  const [holeFifteen, setHoleFifteen] = useState(0);
  const [holeSixteen, setHoleSixteen] = useState(0);
  const [holeSeventeen, setHoleSeventeen] = useState(0);
  const [holeEighteen, setHoleEighteen] = useState(0);
  const [parOne, setParOne] = useState(0);
  const [parTwo, setParTwo] = useState(0);
  const [parThree, setParThree] = useState(0);
  const [parFour, setParFour] = useState(0);
  const [parFive, setParFive] = useState(0);
  const [parSix, setParSix] = useState(0);
  const [parSeven, setParSeven] = useState(0);
  const [parEight, setParEight] = useState(0);
  const [parNine, setParNine] = useState(0);
  const [parTen, setParTen] = useState(0);
  const [parEleven, setParEleven] = useState(0);
  const [parTwelve, setParTwelve] = useState(0);
  const [parThirteen, setParThirteen] = useState(0);
  const [parFourteen, setParFourteen] = useState(0);
  const [parFifteen, setParFifteen] = useState(0);
  const [parSixteen, setParSixteen] = useState(0);
  const [parSeventeen, setParSeventeen] = useState(0);
  const [parEighteen, setParEighteen] = useState(0);
  const navigate = useNavigate();

  const logNewScoreEighteen = (e) => {
    const totalStrokes =
      holeOne +
      holeTwo +
      holeThree +
      holeFour +
      holeFive +
      holeSix +
      holeSeven +
      holeEight +
      holeNine +
      holeTen +
      holeEleven +
      holeTwelve +
      holeThirteen +
      holeFourteen +
      holeFifteen +
      holeSixteen +
      holeSeventeen +
      holeEighteen;
    const totalPar =
      parOne +
      parTwo +
      parThree +
      parFour +
      parFive +
      parSix +
      parSeven +
      parEight +
      parNine +
      parTen +
      parEleven +
      parTwelve +
      parThirteen +
      parFourteen +
      parFifteen +
      parSixteen +
      parSeventeen +
      parEighteen;
    const totalScore = totalStrokes - totalPar;
    const newRoundScore = {
      course: courseName,
      eighteen_holes: true,
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
    const newArray = [...userScores, newRoundScore]
    setUserScores(newArray)
    alert("Round saved successfully!");
    navigate("/scores");
  };

  return (
    <div>
      <p>course name:</p>
      <input
        type="text"
        name="course name"
        onChange={(e) => setCourseName(e.target.value)}
      ></input>
      <p>date played:</p>
      <input
        type="date"
        name="date"
        onChange={(e) => setUserDate(e.target.value)}
      ></input>
      <p></p>
      <table>
        <tr>
          <td>Hole</td>
          <td>Par</td>
          <td>Your Score</td>
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
        <tr>
          <td>ten</td>
          <td>
            <form id="form10">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form10"
              type="number"
              name="par10"
              onChange={(e) => setParTen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form10"
              type="number"
              name="score10"
              onChange={(e) => setHoleTen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>eleven</td>
          <td>
            <form id="form11">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form11"
              type="number"
              name="par11"
              onChange={(e) => setParEleven(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form11"
              type="number"
              name="score11"
              onChange={(e) => setHoleEleven(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>twelve</td>
          <td>
            <form id="form12">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form12"
              type="number"
              name="par12"
              onChange={(e) => setParTwelve(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form12"
              type="number"
              name="score12"
              onChange={(e) => setHoleTwelve(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>thirteen</td>
          <td>
            <form id="form13">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form13"
              type="number"
              name="par13"
              onChange={(e) => setParThirteen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form13"
              type="number"
              name="score13"
              onChange={(e) => setHoleThirteen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>fourteen</td>
          <td>
            <form id="form14">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form14"
              type="number"
              name="par14"
              onChange={(e) => setParFourteen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form14"
              type="number"
              name="score14"
              onChange={(e) => setHoleFourteen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>fifteen</td>
          <td>
            <form id="form15">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form15"
              type="number"
              name="par15"
              onChange={(e) => setParFifteen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form15"
              type="number"
              name="score15"
              onChange={(e) => setHoleFifteen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>sixteen</td>
          <td>
            <form id="form16">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form16"
              type="number"
              name="par16"
              onChange={(e) => setParSixteen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form16"
              type="number"
              name="score16"
              onChange={(e) => setHoleSixteen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>seventeen</td>
          <td>
            <form id="form17">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form17"
              type="number"
              name="par17"
              onChange={(e) => setParSeventeen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form17"
              type="number"
              name="score17"
              onChange={(e) => setHoleSeventeen(parseInt(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>eighteen</td>
          <td>
            <form id="form18">
              <input type="hidden" name="id" />
            </form>
            <input
              form="form18"
              type="number"
              name="par18"
              onChange={(e) => setParEighteen(parseInt(e.target.value))}
            />
          </td>
          <td>
            <input
              form="form18"
              type="number"
              name="score18"
              onChange={(e) => setHoleEighteen(parseInt(e.target.value))}
            />
          </td>
        </tr>
      </table>
      <button onClick={(e) => logNewScoreEighteen(e)}>Save round!</button>
    </div>
  );
}

export default EighteenHoles;
