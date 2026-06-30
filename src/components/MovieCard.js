import {Link} from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>{movie.vote_average}</p>

        <Link to={`/movie/${movie.id}`}>
          <button type="button">View Details</button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard