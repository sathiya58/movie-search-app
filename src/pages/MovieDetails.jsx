

import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/abi';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => {
        if (data.Response === 'True') {
          setMovie(data);
          setError(null);
        } else {
          setError(data.Error);
        }
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <p className="text-red-500 mt-4">{error}</p>;
  }

  if (!movie) {
    return <p className="mt-4">Loading...</p>;
  }

  return (
    <div className="p-4">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
        alt={movie.Title}
        className="w-full h-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Ratings:</strong></p>
      <ul>
        {movie.Ratings.map((rating) => (
          <li key={rating.Source}>
            {rating.Source}: {rating.Value}
          </li>
         
        ))}
      </ul>
    </div>
     
  );
}

export default MovieDetails;
