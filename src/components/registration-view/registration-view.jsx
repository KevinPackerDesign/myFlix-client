import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function RegistrationView() {
  const [username, setUsername] = useState("");
  // as you enter a name into the field the state changes from empty to the name enter in the input.
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://kpmyflix.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("registration successfull! Please Login.");
      })
      .catch((e) => {
        alert("This user is already registered.");
        console.log("error registering the user");
      });
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Birthday:
        <input
          type="text"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <Link to={`/`}>
        <Button variant="secondary">Login</Button>
      </Link>
    </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
