import React, { useState, useEffect } from "react";
import TeeCard from "./TeeCard";

function TeeTimes({ user, formatDate }) {
  const [allTeeTimes, setAllTeeTimes] = useState([]);
  const [golfCourse, setGolfCourse] = useState("");
  const [location, setLocation] = useState("");
  const [holes, setHoles] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(0);
  const [openSpots, setOpenSpots] = useState(0);

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
      open_spots: openSpots,
      date: date,
      time: time,
      user_id: user.id,
    };
    addTeeTime(newTeeTime);
    e.target.reset();
    window.location.reload();
  };

  return (
    <div className="tee-time-flex">
      <div className="tee-times-posts">
        <div className="tee-times-inner-posts">
          {allTeeTimes &&
            allTeeTimes.map((tt) => (
              <TeeCard
                key={tt.id}
                teetime={tt}
                formatDate={formatDate}
                user={user}
              />
            ))}
        </div>
      </div>
      <div>
        <form
          onSubmit={onSubmit}
          className="form-style-4"
          style={{ marginLeft: "20px", marginTop: "100px" }}
        >
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
          <label>Open sports:</label>
          <select name="spots" onChange={(e) => setOpenSpots(e.target.value)}>
            <option value="select"></option>
            <option value="1">1 spot</option>
            <option value="2">2 spots</option>
            <option value="3">3 spots</option>
          </select>
          <label style={{ marginTop: "20px" }}>Tee Time:</label>
          <input type="time" onChange={(e) => setTime(e.target.value)}></input>
          <label style={{ marginTop: "20px" }}>Date:</label>
          <input type="date" onChange={(e) => setDate(e.target.value)}></input>
          <div>
            <input
              type="submit"
              value="post tee time!"
              style={{ marginTop: "20px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeeTimes;
