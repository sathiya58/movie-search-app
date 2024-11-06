import axios from 'axios';

const API_KEY = '40de6565'; // Your OMDB API key
const BASE_URL = 'https://www.omdbapi.com/'; // Corrected the double slashes

// Fetch movies based on the search query, page, and type
export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,  // Search query
        type,      // Movie type (movie, series, episode)
        page,      // Page number for pagination
        apikey: API_KEY,  // API key
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response ? error.response.data.Error : 'Network Error');
  }
};

// Fetch movie details based on the movie ID
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,  // Movie ID
        apikey: API_KEY,  // API key
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    throw new Error(error.response ? error.response.data.Error : 'Network Error');
  }
};
