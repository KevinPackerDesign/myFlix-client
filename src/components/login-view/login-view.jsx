import React, { useState } from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> main

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, password);
  };

  // props.onLoggedIn(username);

  return (
    <form>
      <lable>
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLoggedIn(username);
  };

  return (
    <form>
      <label>
>>>>>>> main
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
<<<<<<< HEAD
      </lable>
      <lable>
=======
      </label>
      <label>
>>>>>>> main
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<<<<<<< HEAD
      </lable>
=======
      </label>
>>>>>>> main
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
<<<<<<< HEAD
=======

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
>>>>>>> main
