import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites'; // Import the Favorites page

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />  {/* Movie Details Page */}
        <Route path="/favorites" element={<Favorites />} />  {/* Favorites Page */}
      </Routes>
    </Router>
  );
}

export default App;
