import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const EditLearningPath = () => {
  const { id } = useParams(); // Extract learning path ID from the route
  const navigate = useNavigate();
  const [learningPath, setLearningPath] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the specific learning path by ID
    const fetchLearningPath = async () => {
      try {
        const response = await Axios.get(`https://e-learn-ncux.onrender.com/api/learning_paths/${id}`);
        setLearningPath(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch the learning path. Please check the ID.');
        setLoading(false);
      }
    };

    if (id) {
      fetchLearningPath();
    } else {
      setError('Invalid learning path ID.');
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`https://e-learn-ncux.onrender.com/api/learning_paths/${id}`, {
        title: learningPath.title,
        description: learningPath.description,
      });
      navigate('/contributordash'); // Redirect to the contributor paths list after saving changes
    } catch (err) {
      console.error('Failed to update learning path:', err);
      setError('Failed to save changes. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Learning Path</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            value={learningPath.title || ''}
            onChange={(e) => setLearningPath({ ...learningPath, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            value={learningPath.description || ''}
            onChange={(e) => setLearningPath({ ...learningPath, description: e.target.value })}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditLearningPath;
