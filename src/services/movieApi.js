import axios from './axiosInstance';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getPopularMovies = async () => {
    try {
        return await axios.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    }
    catch {
        console.error('Error fetching popular movies');
        return [];
    }
}

export const getTopRatedMovies = async () => {
    try {
        return await axios.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    }
    catch {
        console.error('Error fetching top rated movies');
        return [];
    }
}

export const getUpcomingMovies = async () => {
    try {
        return await axios.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    }
    catch {
        console.error('Error fetching upcoming movies');
        return [];
    }
}

export const getMovieDetails = async (movieId) => {
    try {
        return await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    }
    catch {
        console.error('Error fetching movie details');
        return null;
    }
}

export const searchMovies = async (query) => {
    try {
        return await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    }
    catch {
        console.error('Error searching movies');
        return [];
    }
}

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        return response.data.cast;
    } catch (error) {
        console.log(error);
        return [];
    }
};