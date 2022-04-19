import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConf, setNewPasswordConf] = useState("");
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
      name: newName,
      location: newLocation,
    };
    if (newUser.username !== "") {
      if (newPassword === newPasswordConf) {
        if (newUser.password.length >= 5 && newUser.password.length <= 10) {
          fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }).then((r) => r.json());
          alert("User Created Successfully");
          navigate("/login");
        } else {
          alert("Password must be between 5 and 10 characters");
        }
      } else {
        alert("Passwords must match!");
      }
    } else {
      alert("Must enter a username");
    }
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
        <div className="lander-menu-flex">
          <div className="login-signup-forms">
            <form onSubmit={onSubmit} className="form-style-4">
              <div>
                <label>username:</label>
                <input
                  type="text"
                  onChange={(e) => setNewUsername(e.target.value)}
                ></input>
              </div>
              <div>
                <label>password:</label>
                <input
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label>confirm password:</label>
                <input
                  type="password"
                  onChange={(e) => setNewPasswordConf(e.target.value)}
                ></input>
              </div>
              <div>
                <label>name:</label>
                <input
                  type="text"
                  onChange={(e) => setNewName(e.target.value)}
                ></input>
              </div>
              <div>
                <label>location:</label>
                <input
                  type="text"
                  onChange={(e) => setNewLocation(e.target.value)}
                ></input>
              </div>
              <input
                type="submit"
                value="sign-up!"
                style={{ marginTop: "20px" }}
              />
              <Link to="/">
                <input
                  type="button"
                  value="back"
                  style={{ marginLeft: "20px" }}
                />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
