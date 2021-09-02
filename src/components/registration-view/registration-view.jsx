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

  const { onRegistration } = props;

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
    onRegistration(username);
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
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="text"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
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
  onRegistration: PropTypes.func.isRequired,
};
