import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/movieApi';

function Popular() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMovies = async () => {
      const response = await getPopularMovies();
      setMovies(response.data.results);
    }

    getMovies()

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

export default Popular
