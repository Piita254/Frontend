import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star } from 'lucide-react';
import PathDetails from './PathDetails';
const LearningPathList = () => {
    const [learningPaths, setLearningPaths] = useState([]);

    useEffect(() => {
        axios.get('https://e-learn-ncux.onrender.com/api/learning_paths')
            .then(response => {
                setLearningPaths(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the learning paths!", error);
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Learning Paths</h1>
            <ul className="space-y-4">
                {learningPaths.map(path => (
                    <li
                        key={path.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium
                                    ${path.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                                    path.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'}`}>
                                    {path.difficulty}
                                </span>
                                <div className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <span className="text-gray-600">{path.rating ? path.rating.toFixed(1) : '0.0'}</span>
                                </div>
                            </div>

                            <h2 className="text-xl font-semibold text-gray-700 mb-2">{path.title}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-2">{path.description}</p>

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
                    </li>
                ))}
            </ul>
            <PathDetails/>
        </div>
    );
};

export default LearningPathList;
