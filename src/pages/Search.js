import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import { useSelector } from "react-redux";
import { searchMovies } from '../services/movieApi';

const Search = () => {
    const [movies, setMovies] = useState([]);

    const searchText = useSelector(
        (state) => state.search.searchText
    );

    useEffect(() => {

        const getMovies = async () => {
            const response = await searchMovies(searchText);
            setMovies(response.data.results);
        }

        getMovies()

    }, [searchText]);

    return (
        <div className="home">
            <h1>Search Result: { movies.length > 0 ? searchText : "No movies are found"}</h1>
            {movies.length > 0} &&
            (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
            )
        </div>
    )
}

export default Search
