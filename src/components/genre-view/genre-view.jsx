import React from "react";
import propTypes from "prop-types";

export class GenreView extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     Genre: null,
  //     user: null,
  //   };
  // }

  // getGenre(token) {
  //   axios
  //     .get(`https://kpmyflix.herokuapp.com/movies/genres/${this.props.genre}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       this.setState({ Genre: response.data });
  //       console.log(this.state.Genre);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // componentDidMount() {
  //   let accessToken = localStorage.getItem("token");
  //   if (accessToken !== null) {
  //     this.setState({
  //       user: localStorage.getItem("user"),
  //     });
  //   }
  //   this.getGenre(accessToken);
  // }

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="lable">Type:</span>
          <span className="value">{this.props.genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="lable">Description:</span>
          <span className="value"></span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

GenreView.propTypes = {
  genre: propTypes.shape({
    Name: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
  }).isRequired,
};
