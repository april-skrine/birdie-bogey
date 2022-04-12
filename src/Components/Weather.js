import React, { useState, useEffect } from "react";

function Weather({ user, setUser }) {
  const [userWeather, setUserWeather] = useState({});
  const [newWeatherFetch, setNewWeatherFetch] = useState("");

  useEffect(() => {
    if (user) {
      fetch(`https://goweather.herokuapp.com/weather/${user.location}`)
        .then((r) => r.json())
        .then(setUserWeather);
    } else {
      fetch(`https://goweather.herokuapp.com/weather/Augusta`)
        .then((r) => r.json())
        .then(setUserWeather);
    }
  }, [user]);

  const fetchNewWeather = (e) => {
    if (user) {
      e.preventDefault();
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          location: newWeatherFetch,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => setUser(data));
      e.target.reset();
    } else {
      e.preventDefault()
      alert('You must be logged in to change your location!')
      e.target.reset();
    }
  };

  return (
    <div className="weather">
      <h3 style={{ textAlign: "center" }}>
        {user ? user.location : "Augusta"}
      </h3>
      <p className="weather-forecast-paragraph">
        {userWeather &&
          parseInt((9 / 5) * parseInt(userWeather.temperature) + 32)}
        °F
      </p>
      <p className="weather-forecast-paragraph">
        Winds:{" "}
        {userWeather && parseInt(parseInt(userWeather.wind) * 0.6213711922)} MPH
      </p>
      <p className="weather-forecast-paragraph">
        {userWeather && userWeather.description}
      </p>
      <div className="weather-paragraph-2">
        <form style={{ alignContent: "center" }} onSubmit={fetchNewWeather}>
          <input
            type="text"
            onChange={(e) => setNewWeatherFetch(e.target.value)}
            style={{
              backgroundColor: "#EBB52F",
              color: "white",
              border: "2px solid #FBD884",
              padding: "10px",
              fontFamily: "just another hand",
              fontSize: "26px",
              width: "150px",
              marginTop: "30px",
            }}
          />
          <button
            className="button-weather"
            type="submit"
          >{`UPDATE LOCATION >>`}</button>
        </form>
      </div>
    </div>
  );
}

export default Weather;
