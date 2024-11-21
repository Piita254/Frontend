import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import * as LearningPathService from '../../services/LearningPathService';
import { useNavigate } from 'react-router-dom';

const ContributerDashboard = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const { user } = useUser(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.id) return; // Ensure user exists before fetching

    const fetchLearningPaths = async () => {
      try {
        const response = await LearningPathService.getLearningPathsByContributor(user.id);
        setLearningPaths(response.data);
      } catch (error) {
        console.error('Error fetching learning paths:', error);
      }
    };

    fetchLearningPaths();
  }, [user]);

  return (
    <div className="contributor-dashboard">
      <h1>Your Learning Paths</h1>
      <button onClick={() => navigate('/create-learning-path')}>Create New Learning Path</button>
      <div className="learning-paths">
        {learningPaths.length > 0 ? (
          learningPaths.map((path) => (
            <div key={path.id} className="learning-path">
              <h2>{path.title}</h2>
              <button onClick={() => navigate(`/edit-learning-path/${path.id}`)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No learning paths available. Create one to get started!</p>
        )}
      </div>
    </div>
  );
};

export default ContributerDashboard;
