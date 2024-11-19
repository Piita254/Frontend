import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditLearningPathForm = () => {
    const { id } = useParams(); // Get the learning path ID from the route
    console.log(id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchLearningPath = async () => {
            try {
                const response = await axios.get(`https://e-learn-ncux.onrender.com/api/learning_paths/${id}`);
                setTitle(response.data.title);
                setDescription(response.data.description);
            } catch (error) {
                setMessage('Failed to fetch learning path');
            }
        };

        fetchLearningPath();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `https://e-learn-ncux.onrender.com/api/learning_paths/${id}`, 
                { title, description }
            );

            setMessage(response.data.message); // Assuming the API sends a message back on success
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Edit Learning Path</h1>
            {message && <p className="text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block mb-2">
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </label>
                <label className="block mb-2">
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditLearningPathForm;
