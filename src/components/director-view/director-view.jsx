import React from "react";
import propTypes from "prop-types";
import Button from "react-bootstrap/Button";

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <div className="director-view">
        <div>
          <span className="value">{director.Name}</span>
        </div>
        <div>
          <span className="value">{director.Bio}</span>
        </div>

        <div>
          <span className="value">{director.Birth}</span>
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

DirectorView.propTypes = {
  director: propTypes.shape({
    Name: propTypes.string.isRequired,
    Bio: propTypes.string.isRequired,
    Birthdate: propTypes.instanceOf(Date),
  }).isRequired,
};
