import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star } from 'lucide-react';

const LearnerDashboard = () => {
    const [learningPaths, setLearningPaths] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of items per page
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchLearningPathsData = async () => {
        try {
            setLoading(true);

            // Step 1: Fetch user learning paths
            const userLearningPathsResponse = await axios.get(
                'https://e-learn-ncux.onrender.com/api/user-learning-paths'
            );
            const userPaths = userLearningPathsResponse.data;

            // Step 2: Fetch all learning paths
            const learningPathsResponse = await axios.get(
                'https://e-learn-ncux.onrender.com/api/learning_paths'
            );
            const allPaths = learningPathsResponse.data;

            // Step 3: Map user learning paths to all learning paths
            const mergedPaths = allPaths.map((path) => ({
                ...path,
                userProgress: userPaths.find((userPath) => userPath.learning_path_id === path.id)?.progress || null,
                dateEnrolled: userPaths.find((userPath) => userPath.learning_path_id === path.id)?.date_enrolled || null,
            }));

            setLearningPaths(mergedPaths);
        } catch (error) {
            setError('Failed to fetch learning paths');
            console.error("There was an error fetching learning paths data!", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLearningPathsData(); // Fetch data on component mount
    }, []);

    const totalPages = Math.ceil(learningPaths.length / itemsPerPage); // Calculate total pages

    const indexOfLastPath = currentPage * itemsPerPage;
    const indexOfFirstPath = indexOfLastPath - itemsPerPage;
    const currentPaths = learningPaths.slice(indexOfFirstPath, indexOfLastPath); // Get paths for the current page

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 font-sans">
  <h1 className="text-3xl font-bold mb-4 text-gray-800">Learning Paths</h1>
  
  {error && <p className="text-red-500">{error}</p>}
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {currentPaths.length > 0 ? (
      currentPaths.map((path) => (
        <div
          key={path.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium
                  ${path.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    path.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}
              >
                {path.difficulty}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-gray-600">{path.rating ? path.rating.toFixed(1) : '0.0'}</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">{path.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{path.description}</p>

            {path.dateEnrolled && (
              <p className="text-sm text-gray-500 mb-2">
                Enrolled on: {new Date(path.dateEnrolled).toLocaleDateString()}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{path.modules ? path.modules.length : 0} modules</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{path.totalEnrolled || 0} enrolled</span>
                </div>
              </div>
              <Link
                to={`/learning_paths/${path.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No learning paths available.</p>
    )}
  </div>
</div>

        </div>
    );
};

export default LearnerDashboard;
