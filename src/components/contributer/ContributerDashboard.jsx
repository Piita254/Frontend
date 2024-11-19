import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContributerDashboard = () => {
    const [learningPaths, setLearningPaths] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLearningPaths = async () => {
            try {
                setLoading(true);

                // Simulate the API request without authorization header
                const response = await axios.get('https://e-learn-ncux.onrender.com/api/learning_paths');

                setLearningPaths(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch learning paths. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchLearningPaths();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Contributions</h1>
            {error && <p className="text-red-500">{error}</p>}
            {learningPaths.length === 0 ? (
                <p>You haven't created any learning paths yet.</p>
            ) : (
                <ul className="space-y-4">
                    {learningPaths.map((path) => (
                        <li
                            key={path.id}
                            className="border p-4 rounded shadow-md bg-gray-100"
                        >
                            <h2 className="text-lg font-semibold">{path.title}</h2>
                            <p>{path.description}</p>
                            <p className="text-sm text-gray-500">
                                Created on: {new Date(path.created_at).toLocaleDateString()}
                            </p>
                            <Link
                                to={`/edit-learning-path/${path.id}`}
                                className="text-blue-500 underline mt-2 block"
                            >
                                Edit
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContributerDashboard;
