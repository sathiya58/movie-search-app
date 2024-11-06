import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteToggle = (movie) => {
    const newFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onFavoriteToggle={handleFavoriteToggle}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
