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
    setUserScores({});
    navigate("/");
  };

  const formatDate = (somedate) => {
    let dateArr = somedate.split("-");
    return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
  };

  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="container-main">
        <div className="nav-bar-container">
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
              <div className="content-main">
                <Login
                  setCurrentUser={setCurrentUser}
                  setIsAuthenticated={setIsAuthenticated}
                  setUserScores={setUserScores}
                />
              </div>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <div className="content-main">
                <Signup />
              </div>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <div className="content-main">
                <Home
                  user={user}
                  userScores={userScores}
                  formatDate={formatDate}
                />
              </div>
            }
          />
          <Route
            exact
            path="/scratchpad"
            element={
              <div className="content-main">
                {isAuthenticated ? <Scratchpad /> : <NotLoggedIn />}
              </div>
            }
          />
          <Route
            exact
            path="/scores"
            element={
              <div className="content-main">
                {isAuthenticated ? (
                  <UserScores
                    user={user}
                    userScores={userScores}
                    formatDate={formatDate}
                  />
                ) : (
                  <NotLoggedIn />
                )}
              </div>
            }
          />
          <Route
            exact
            path="/tee-times"
            element={
              <div className="content-main">
                {isAuthenticated ? (
                  <TeeTimes user={user} formatDate={formatDate} />
                ) : (
                  <NotLoggedIn />
                )}
              </div>
            }
          />
          <Route
            exact
            path="/eighteenholes"
            element={
              <div className="content-main">
                {isAuthenticated ? (
                  <EighteenHoles
                    user={user}
                    setUserScores={setUserScores}
                    userScores={userScores}
                  />
                ) : (
                  <NotLoggedIn />
                )}
              </div>
            }
          />
          <Route
            exact
            path="/nineholes"
            element={
              <div className="content-main">
                {isAuthenticated ? (
                  <NineHoles
                    user={user}
                    setUserScores={setUserScores}
                    userScores={userScores}
                  />
                ) : (
                  <NotLoggedIn />
                )}
              </div>
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
