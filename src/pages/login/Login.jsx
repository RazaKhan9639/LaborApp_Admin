import React, { useState } from "react";
import "./login.scss"; // Import the styles

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login authentication logic here
    if (username === "admin" && password === "password") {
      // Successful login
      console.log("Admin logged in!");
    } else {
      // Failed login
      console.log("Invalid username or password");
    }

    // Clear input fields
    setUsername("");
    setPassword("");
  };

  return (
    <>
    <h1>Admin Login</h1>
    <form onSubmit={handleSubmit} className="login-form">
      
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Login;

