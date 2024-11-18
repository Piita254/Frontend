import React from 'react';
import { GraduationCap, Trophy, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Navbar() {
  const user = null; // Remove the useStore logic for now

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">LearnTogether</span>
          </Link>
          </div>

          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search learning paths..."
                className="w-full bg-indigo-500 text-white placeholder-indigo-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-indigo-200" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hover:text-indigo-200">
              <Link to="/leaderboard" className="hover:text-indigo-200">
              <Trophy className="h-6 w-6" />
            </Link>
            </div>
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="bg-indigo-500 rounded-full px-3 py-1">
                  {user.points} pts
                </span>
                <div className="hover:text-indigo-200">
                  <User className="h-6 w-6" />
                </div>
              </div>
            ) : (
              <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-50">
                <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-50"
              >
                Sign In
              </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}