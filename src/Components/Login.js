import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setCurrentUser, setIsAuthenticated, setUserScores }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then(() => {
        fetch("/authorized_user").then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setIsAuthenticated(true);
              setCurrentUser(user);
              setUserScores(user.round_scores)
              navigate("/home");
            });
          } else {
            alert("Incorrect Username or Password");
          }
        });
      });
  }

  return (
    <div style={{ backgroundColor: "#71EF8B" }}>
      <div className="lander-flex-container">
        <div className="lander-logo">
          <img
            src="https://res.cloudinary.com/april-skrine/image/upload/v1649176250/birdie.bogey/bblogo_yzdj90.jpg"
            alt="main logo"
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-boxes"
            />
            <label>password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-boxes"
            />
            <button className="button-header" type="submit">
              login
            </button>
          </form>
        </div>
        <div>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
