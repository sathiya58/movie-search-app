import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MovieCard({ movie, onFavoriteToggle, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onFavoriteToggle(movie);  // Pass movie data to parent component
  };

  return (
    <div className="border rounded overflow-hidden shadow-lg p-4">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        className="w-full h-60 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>

      {/* Favorite Icon */}
      <button onClick={handleFavoriteClick} className="text-red-500 mt-4">
        {favorite ? '❤️' : '🤍'} {/* Heart icon */}
      </button>

      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 mt-4 inline-block">
        View Details
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MovieCard;
