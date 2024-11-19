import React, { useState } from 'react'; 

const CreateLearningPathForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({}); // Track validation errors

    const validateForm = () => {
        const errors = {};

        if (!title.trim()) {
            errors.title = 'Title is required.';
        }
        if (!description.trim()) {
            errors.description = 'Description is required.';
        } else if (description.length < 20) {
            errors.description = 'Description must be at least 20 characters long.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'https://e-learn-ncux.onrender.com/api/learning_paths/${id}',
                { title, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMessage(response.data.message);
            setTitle('');
            setDescription('');
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Create a New Learning Path</h1>
            {message && <p className="text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block mb-2">
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full border rounded p-2 ${
                            errors.title ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </label>
                <label className="block mb-2">
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`w-full border rounded p-2 ${
                            errors.description ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.description && (
                        <p className="text-red-500">{errors.description}</p>
                    )}
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateLearningPathForm;
