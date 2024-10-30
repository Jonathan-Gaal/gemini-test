import React, { useState } from 'react';

const MovieList = ({ movies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleCheckboxChange = (event, movie) => {
    if (event.target.checked) {
      setSelectedMovies([...selectedMovies, movie]);
    } else {
      setSelectedMovies(selectedMovies.filter(m => m !== movie));
    }
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <input
            type="checkbox"
            checked={selectedMovies.includes(movie)}
            onChange={(event) => handleCheckboxChange(event, movie)}
          />
          {movie.title}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
