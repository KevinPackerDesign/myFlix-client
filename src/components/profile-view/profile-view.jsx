import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button, Card, Form, Row } from "react-bootstrap";
import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthdate: null,
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
          Birthdate: response.data.Birthdate,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeFavouriteMovie(movie) {
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

  // updateUser(props) {
  //   const [username, newUsername] = useState("");

  //   const updateUsername = (e) => {
  //     e.preventDefault();
  //     axios
  //       .put(`https://kpmyflix.herokuapp.com/login?Username=${username}`)

  //       .then((response) => {
  //         const data = response.data;
  //         props.updateUser(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  // }

  updateUser() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    const newUsername = " ";

    axios
      .put(
        `https://kpmyflix.herokuapp.com/users/${newUsername}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);

        alert(this.props.users.newUsername + " username updated");
      })

      .catch((e) => {
        console.log(e);
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
          <h2>{localStorage.getItem("user")} Favorites Movies</h2>
          <Card.Body>
            {FavoriteMovies.length === 0 && (
              <div className="text-center">Empty</div>
            )}

            <div className="favorites-movies ">
              {FavoriteMovies.length > 0 &&
                movies.map((movie) => {
                  if (
                    movie._id ===
                    FavoriteMovies.find((favMovie) => favMovie === movie._id)
                  ) {
                    return (
                      <Card.Body>
                        <Card.Title className="movie-card-title">
                          {movie.Title}
                        </Card.Title>
                        <Button
                          size="sm"
                          className="profile-button remove-favorite"
                          variant="danger"
                          value={movie._id}
                          onClick={() => this.removeFavouriteMovie(movie)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    );
                  }
                })}
            </div>
          </Card.Body>

          <h3 className="profile-view justify-content-md-center">
            Update Profile
          </h3>
          <Form>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => updateUsername(e.target.value)}
            />
            <Button
              className="profile-view justify-content-md-center"
              variant="danger"
              type="submit"
              onClick={(e) => this.updateUsername(e)}
            >
              Update User
            </Button>
          </Form>
          <Card.Body className="profile-view justify-content-md-center">
            <Form>
              <h3>Delete your Account</h3>
              <Card.Body>
                <Button
                  className="profile-view justify-content-md-center"
                  variant="danger"
                  onClick={(e) => this.handleDeleteUser(e)}
                >
                  Delete Account
                </Button>
              </Card.Body>
            </Form>
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
    Birthdate: PropTypes.string,
  }),
};
