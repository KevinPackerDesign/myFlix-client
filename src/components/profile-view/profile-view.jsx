import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button, Card, CardDeck, Form, Row } from "react-bootstrap";
import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getUser(accessToken);
    }
  }

  // get user method
  getUser(token) {
    const username = localStorage.getItem("user");
    axios
      .get(`https://kpmyflix.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
        console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateUser() {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://kpmyflix.herokuapp.com/users/${username}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        localStorage.setItem("user", this.state.Username);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state);
  }

  removeFavoriteMovie(movie) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");

    axios
      .delete(
        `https://kpmyflix.herokuapp.com/users/${username}/movies/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert("Movie was removed");
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleDeleteUser(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");

    axios
      .delete(`https://kpmyflix.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        alert("Your account has been deleted.");
        window.open(`/`, "_self");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { FavoriteMovies } = this.state;
    const { movies } = this.props;

    return (
      <Row className="profile-view">
        <Card className="profile-card">
          <h2>{this.state.Username} Favorites Movies</h2>
          <Card.Body>
            {FavoriteMovies.length === 0 && (
              <div className="text-center">Empty.</div>
            )}

            <div className="favorites-movies ">
              {FavoriteMovies.length > 0 &&
                movies.map((movie) => {
                  if (
                    movie._id ===
                    FavoriteMovies.find((favMovie) => favMovie === movie._id)
                  ) {
                    return (
                      <CardDeck className="movie-card-deck">
                        <Card
                          className="favorites-item card-content"
                          style={{ width: "16rem" }}
                          key={movie._id}
                        >
                          <Card.Img
                            style={{ width: "18rem" }}
                            className="movieCard"
                            variant="top"
                            src={movie.ImageURL}
                          />
                          <Card.Body>
                            <Card.Title className="movie-card-title">
                              {movie.Title}
                            </Card.Title>
                            <Button
                              size="sm"
                              className="profile-button remove-favorite"
                              variant="danger"
                              value={movie._id}
                              onClick={(e) => this.removeFavoriteMovie(movie)}
                            >
                              Remove
                            </Button>
                          </Card.Body>
                        </Card>
                      </CardDeck>
                    );
                  }
                })}
            </div>
          </Card.Body>

          <h1 className="section">Update Profile</h1>
          <Card.Body>
            <p>Current user information</p>
            <p>{this.state.Username}</p>
            <p>{this.state.Email}</p>
            <p>{this.state.Birthday}</p>
            <Form.Group controlId="formBasicUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Change Username"
                onChange={(e) => this.setState({ Username: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="form-label">
                Password<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                onChange={(e) => this.setState({ Password: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Change Email"
                onChange={(e) => this.setState({ Email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBirthday">
              <Form.Label className="form-label">Birthday</Form.Label>
              <Form.Control
                type="date"
                placeholder="Change Birthday"
                onChange={(e) => this.setState({ Birthday: e.target.value })}
              />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              onClick={() => this.updateUser()}
            >
              Update
            </Button>

            <h3>Delete your Account</h3>
            <Card.Body>
              <Button
                variant="danger"
                onClick={(e) => this.handleDeleteUser(e)}
              >
                Delete Account
              </Button>
            </Card.Body>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

ProfileView.propTypes = {
  user: PropTypes.shape({
    FavoriteMovies: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
      })
    ),
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
