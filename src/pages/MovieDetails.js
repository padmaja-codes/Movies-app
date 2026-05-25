import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    fetchMovieDetails,
    fetchMovieCast,
} from "../services/movieApi";

function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getMovieData = async () => {
            const movieData = await fetchMovieDetails(id);
            const castData = await fetchMovieCast(id);
            setMovie(movieData);
            setCast(castData);
        };
        getMovieData();
    }, [id]);


    if (!movie) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="movie-details-page">
            <div className="movie-details-section">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-content">
                    <h1>{movie.title}</h1>
                    <p>⭐ {movie.vote_average.toFixed(2)}</p>
                    <p>Duration: {movie.runtime} mins</p>
                    <p>
                        Genre:
                        {" "}
                        {movie.genres.map((genre) =>
                            genre.name
                        ).join(", ")}
                    </p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="cast-section">
                <h2>Cast</h2>
                <div className="cast-grid">
                    {cast.map((actor) => (
                        <div
                            className="cast-card"
                            key={actor.cast_id}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                alt={actor.original_name}
                            />
                            <h3>{actor.original_name}</h3>
                            <p>{actor.character}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;