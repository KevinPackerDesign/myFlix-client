import React, { useState } from "react";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, password);
  };

  // props.onLoggedIn(username);

  return (
    <form>
      <lable>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </lable>
      <lable>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </lable>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
