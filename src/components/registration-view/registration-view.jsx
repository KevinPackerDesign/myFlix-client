import React, { useState } from "react";
import axios from "axios";
import Proptypes from "prop-types";

export function RegistrationView(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const { onLoggedIn } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://kpmyflix.herokuapp.com/users", {
        FirstName: firstname,
        LastName: lastname,
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .the((response) => {
        const data = respose.data;
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
      <lable>
        First Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </lable>
      <lable>
        Last Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </lable>
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
      <lable>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </lable>
      <lable>
        Birthday:
        <input
          type="text"
          value={birth}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </lable>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

Registraionview.proptypes = {
  resister: Proptypes.shape({
    firstname: Proptypes.string,
    lastname: Proptypes.string,
    username: Proptypes.string.isRequired,
    password: Proptypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: Proptypes.string.isRequired,
  }),
};
