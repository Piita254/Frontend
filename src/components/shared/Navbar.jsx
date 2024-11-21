import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, User } from "lucide-react";
import { useUser } from "../../context/UserContext";

const Navbar = () => {
  const { user } = useUser(); // Get the user context

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-xl">LearnTogether</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Role-Based Links */}
            {user?.role === "Admin" && (
              <Link to="/admin" className="hover:text-indigo-200 font-medium">
                Admin Dashboard
              </Link>
            )}
            {user?.role === "Contributor" && (
              <Link
                to="/contributer"
                className="hover:text-indigo-200 font-medium"
              >
                Contributor Dashboard
              </Link>
            )}
            {user?.role === "Learner" && (
              <Link
                to="/learner"
                className="hover:text-indigo-200 font-medium"
              >
                Learner Dashboard
              </Link>
            )}

            {/* Authentication Links */}
            <div>
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="hover:text-indigo-200">
                    <User className="h-6 w-6" />
                  </div>
                  <button
                    className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-50"
                    onClick={() => {
                      // Clear user context or handle logout logic
                      localStorage.clear();
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-50">
                  <Link to="/login">Sign In</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
