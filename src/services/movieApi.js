import axios from './axiosInstance';
export const getPopularMovies = async () => {
    try{
        return await axios.get('movie/popular?api_key=4e7473ed46f36d615670aa1af4ba4e22&language=en-US&page=1');
    }
    catch{
        console.error('Error fetching popular movies');
        return [];
    }
}

export const getTopRatedMovies = async () => {
    try{
        return await axios.get('movie/top_rated?api_key=4e7473ed46f36d615670aa1af4ba4e22&language=en-US&page=1');
    }
    catch{
        console.error('Error fetching top rated movies');
        return [];
    }
}

export const getUpcomingMovies = async () => {
    try{
        return await axios.get('movie/upcoming?api_key=4e7473ed46f36d615670aa1af4ba4e22&language=en-US&page=1');
    }
    catch{
        console.error('Error fetching upcoming movies');
        return [];
    }
}

export const getMovieDetails = async (movieId) => {
    try{
        return await axios.get(`movie/${movieId}?api_key=4e7473ed46f36d615670aa1af4ba4e22&language=en-US`);
    }
    catch{
        console.error('Error fetching movie details');
        return null;
    }
}

export const searchMovies = async (query) => {
    try{
        return await axios.get(`search/movie?api_key=4e7473ed46f36d615670aa1af4ba4e22&language=en-US&query=${query}&page=1&include_adult=false`);
    }
    catch{
        console.error('Error searching movies');
        return [];
    }
}