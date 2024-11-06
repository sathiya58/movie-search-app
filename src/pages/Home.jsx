import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchMovies } from '../services/abi';

function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieType, setMovieType] = useState('');
  
  // Combined useEffect for fetching data based on searchTerm or movieType
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies(searchTerm || 'action', 1, movieType); // Default 'action' if no search term
        if (response && response.Search) {
          setMovies(response.Search);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    // Fetch movies when searchTerm or movieType changes
    if (searchTerm || movieType) {
      fetchData();
    }
  }, [searchTerm, movieType]); // Trigger the fetch when searchTerm or movieType changes

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update the search term
  };

  const handleFavoriteToggle = (movie) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.some((fav) => fav.imdbID === movie.imdbID)
        ? prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prevFavorites, movie];

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (movie) => favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {/* Movie type dropdown */}
        <select
          value={movieType}
          onChange={(e) => setMovieType(e.target.value)}
          className="p-2 mt-4 border"
        >
           <option value="">Select Type</option> 
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
