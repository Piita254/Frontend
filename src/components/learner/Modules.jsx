import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Modules= () => {
    const { id } = useParams(); // `id` is the module_id from the URL
    const [module, setModule] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModule = async () => {
            try {
                const response = await fetch(`https://e-learn-ncux.onrender.com/api/modules/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch module');
                }
                const data = await response.json();
                setModule(data);
            } catch (err) {
                console.error(err);
                setError('Could not load the module details.');
            }
        };

        fetchModule();
    }, [id]);

    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!module) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{module.title}</h1>
            <p className="text-gray-600 mb-4">{module.description}</p>

            {/* Resources Section */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Resources</h2>
            <ul className="space-y-4">
                {module.resources && module.resources.length > 0 ? (
                    module.resources.map(resource => (
                        <li
                            key={resource.id}
                            className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-700">{resource.title}</h3>
                            <a
                                href={resource.content}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 font-medium hover:underline"
                            >
                                View Resource
                            </a>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No resources available for this module.</p>
                )}
            </ul>

            {/* Quizzes Section */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Quizzes</h2>
            <ul className="space-y-4">
                {module.quizzes && module.quizzes.length > 0 ? (
                    module.quizzes.map(quiz => (
                        <li
                            key={quiz.id}
                            className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-700">{quiz.question}</h3>
                            <ul className="mt-2 space-y-2">
                                {quiz.options && JSON.parse(quiz.options).map((option, index) => (
                                    <li key={index} className="text-gray-600">
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 mt-2">Correct Answer: {quiz.correct_answer}</p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No quizzes available for this module.</p>
                )}
            </ul>
        </div>
    );
};

export default Modules;
