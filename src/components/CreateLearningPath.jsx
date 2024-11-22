import React, { useState } from 'react';
import Axios from 'axios';

const CreateLearningPath = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    learning_path_id: '',
    progress: 0,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Send POST request to add a new user-learning path
      await Axios.post('https://e-learn-ncux.onrender.com/api/user-learning-paths', formData);
      setSuccess('User-Learning Path added successfully.');
      setFormData({ user_id: '', learning_path_id: '', progress: 0 }); // Reset form
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('User-Learning Path already exists.');
      } else {
        setError('Failed to add User-Learning Path.');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add User-Learning Path</h1>

      {/* Error and Success Messages */}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}

      {/* Form to Add User-Learning Path */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">User ID</label>
          <input
            type="number"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            value={formData.user_id}
            onChange={(e) => setFormData({ ...formData, user_id: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Learning Path ID</label>
          <input
            type="number"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            value={formData.learning_path_id}
            onChange={(e) => setFormData({ ...formData, learning_path_id: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Progress (optional)</label>
          <input
            type="number"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            value={formData.progress}
            onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
            min="0"
            max="100"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLearningPath;
