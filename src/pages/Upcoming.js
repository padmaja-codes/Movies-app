import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import { getUpcomingMovies } from '../services/movieApi';

function Upcoming() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMovies = async () => {
      const response = await getUpcomingMovies();
      setMovies(response.data.results);
    };

    getMovies();

  }, []);

  return (
    <div className="home">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  )
}

export default Upcoming
