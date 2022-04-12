import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeeCard from "./TeeCard";

// have an input where users can create a tee time
// view all tee times currently posted (sort order?)
// allow any user to comment on a tee time
// allow the user who posted it to delete a tee time?

function TeeTimes({ user }) {
  const [allTeeTimes, setAllTeeTimes] = useState([]);
  const [golfCourse, setGolfCourse] = useState("");
  const [location, setLocation] = useState("");
  const [holes, setHoles] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/tee_times`)
      .then((r) => r.json())
      .then(setAllTeeTimes);
  }, []);

  const addTeeTime = (newTeeTime) => {
    fetch(`/tee_times`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeeTime),
    })
      .then((r) => r.json())
      .then((newTeeTime) => setAllTeeTimes([...allTeeTimes, newTeeTime]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTeeTime = {
      golf_course: golfCourse,
      location: location,
      number_of_holes: holes,
      time: time,
      user_id: user.id,
    };
    addTeeTime(newTeeTime);
    e.target.reset();
    navigate("/tee-times");
  };

  return (
      <div className="tee-time-flex">
        <div className="tee-times-posts">
          <div className="tee-times-inner-posts">
            {allTeeTimes.map((tt) => (
              <TeeCard key={tt.id} teetime={tt} />
            ))}
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <label>Course:</label>
            <input
              type="text"
              onChange={(e) => setGolfCourse(e.target.value)}
            ></input>
            <label>City:</label>
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <label>Playing:</label>
            <select name="holes" onChange={(e) => setHoles(e.target.value)}>
              <option value="select"></option>
              <option value="18">18 holes</option>
              <option value="9">9 holes</option>
            </select>
            <label>Tee Time:</label>
            <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
            ></input>
            <button type="submit">Post Tee Time!</button>
          </form>
        </div>
      </div>
  );
}

export default TeeTimes;
