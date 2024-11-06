import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Movie Finder</Link>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          <Link to="/favorites" className="text-white">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
