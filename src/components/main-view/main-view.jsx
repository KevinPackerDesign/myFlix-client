import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "Inception",
          Description:
            "About a group that enters your dreams to steal information",
          ImagePath:
            "https://m.media-amazon.com/images/I/51p3oAsXNmL._AC_SS450_.jpg",
        },
        {
          _id: 2,
          Title: "The Shawshank Redemption",
          Description: "Story of a con that breaks out of prison",
          ImagePath:
            "https://m.media-amazon.com/images/I/71AzwgLT2WL._AC_SY679_.jpg",
        },
        {
          _id: 3,
          Title: "Gladiator",
          Description:
            "About a Roman general that gets exiled after his family is killed.",
          ImagePath:
            "https://m.media-amazon.com/images/I/71sj8Yt20qL._AC_SY679_.jpg",
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    // if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0)
      return <div className="main-view">The list is empty</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}

// to add something like a button into this you can wrap it all in another <div> or use <React.Fragment> or use the short hand<> </>