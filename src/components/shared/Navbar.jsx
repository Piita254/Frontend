import React, { useState, useEffect } from 'react';
import { GraduationCap, Trophy, Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Use effect to check for user data in localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Update the user state with stored data
    }
  }, []); // The empty dependency array ensures this only runs once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null); // Reset the user state when logging out
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-2xl font-bold">
            <GraduationCap className="h-8 w-8 mr-2 inline-block" /> LearnTogether
          </Link>
          {user && (
            <div className="flex space-x-4">
              <Link to="/leaderboard" className="flex items-center">
                <Trophy className="h-5 w-5 mr-1" />
                Leaderboard
              </Link>
              <Link to="/search" className="flex items-center">
                <Search className="h-5 w-5 mr-1" />
                Search
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-white">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-200">Login</Link>
              <Link to="/signup" className="bg-indigo-800 px-4 py-2 rounded-lg hover:bg-indigo-900">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;