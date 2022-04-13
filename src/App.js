import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Lander from "./Components/Lander";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Weather from "./Components/Weather";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import TeeTimes from "./Components/TeeTimes";
import UserScores from "./Components/UserScores";
import Scratchpad from "./Components/Scratchpad";
import NotLoggedIn from "./Components/NotLoggedIn";
import EighteenHoles from "./Components/EighteenHoles";
import NineHoles from "./Components/NineHoles";

function App() {
  const [user, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userScores, setUserScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setIsAuthenticated(true);
          setCurrentUser(data);
        });
      }
    });
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
    setIsAuthenticated(false);
    setUserScores({})
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="container-main">
        <div style={{ backgroundColor: "#71EF8B" }}>
          <NavBar user={user} handleLogout={handleLogout} />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="content-main">
                <Lander />
              </div>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Login
                setCurrentUser={setCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                setUserScores={setUserScores}
              />
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home user={user}/>} />
          <Route
            exact
            path="/scratchpad"
            element={isAuthenticated ? <Scratchpad /> : <NotLoggedIn />}
          />
          <Route
            exact
            path="/scores"
            element={
              isAuthenticated ? (
                <UserScores user={user} userScores={userScores}/>
              ) : (
                <NotLoggedIn />
              )
            }
          />
          <Route
            exact
            path="/tee-times"
            element={
              isAuthenticated ? <TeeTimes user={user} /> : <NotLoggedIn />
            }
          />
          <Route
            exact
            path="/eighteenholes"
            element={
              isAuthenticated ? <EighteenHoles user={user} setUserScores={setUserScores} userScores={userScores}/> : <NotLoggedIn />
            }
          />
          <Route
            exact
            path="/nineholes"
            element={
              isAuthenticated ? <NineHoles user={user} setUserScores={setUserScores} userScores={userScores}/> : <NotLoggedIn />
            }
          />
        </Routes>
        <div className="weather-flex">
          <Weather user={user} setUser={setCurrentUser} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
