import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./registration-view.scss";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [usernameError, setUserNameError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [birthdayError, setBirthdayError] = useState({});

  // const { onRegistration } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    let vaild = formValidation();
    if (vaild) {
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
          window.open("/", "_self");
        })
        .catch((e) => {
          alert("This user is already registered.");
          console.log("error registering the user");
        });
      // onRegistration(username);
    }
  };

  const formValidation = () => {
    let usernameError = {};
    let passwordError = {};
    let emailError = {};
    let birthdayError = {};

    if (username.trim().length < 4) {
      usernameError.usernameShort = "Username must be longer than 4 charaters.";
    }
    if (password.trim().length < 5) {
      passwordError.passwordshort = "Password must be longer that 5 charaters.";
    }

    if (!(email && email.includes(".") && email.includes("@"))) {
      emailError.emailIncorrect = "Email must include '.' and '@'.";
      isValid = flase;
    }
    if (birthday === "") {
      birthdayError.bdayIncorrect = "Format is month/day/year (12/01/21).";
    }
    setUserNameError(usernameError);
    setPasswordError(passwordError);
    setEmailError(emailError);
    setBirthdayError(birthdayError);
    return isVaild;
  };

  return (
    <Form>
      <Row className="main-view justify-content-md-center">
        <Col md={4}>
          <Form.Group controlId="formUsername">
            <Form.Label class="Username">Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {Object.keys(usernameError).map((key) => {
              return <div key={key}>{usernameError[key]}</div>;
            })}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {Object.keys(passwordError).map((key) => {
              return <div key={key}>{passwordError[key]}</div>;
            })}
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {Object.keys(emailError).map((key) => {
              return <div key={key}>{emailError[key]}</div>;
            })}
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="data"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            {Object.keys(birthdayError).map((key) => {
              return <div key={key}>{birthdayError[key]}</div>;
            })}
          </Form.Group>
        </Col>
      </Row>
      <Row className="main-view justify-content-md-center">
        <Col md={3}>
          <Button
            variant="primary"
            className="regbutton"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};
