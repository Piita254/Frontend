import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  
  if (isAuthPage) return null;

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-xl">CodeMaster</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
