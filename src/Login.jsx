import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (username === "" || password === "") {
      setMessage("");
      return;
    }
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {submit && username === "" && (
            <p style={{ color: "red" }}>Username is required</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {submit && password === "" && (
            <p style={{ color: "red" }}>Password is required</p>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && (
        <p style={{ color: message === "Welcome, user!" ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}
export default Login;
