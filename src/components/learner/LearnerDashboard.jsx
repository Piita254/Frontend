import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import * as LearningPathService from '../../services/LearningPathService';

const LearnerDashboard = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const { user } = useUser(); //  custom hook

  useEffect(() => {
    if (!user || !user.id) return; // Ensure user and ID are defined

    const fetchLearningPaths = async () => {
      try {
        const response = await LearningPathService.getLearningPathsByUser(user.id);
        setLearningPaths(response.data);
      } catch (error) {
        console.error('Error fetching learning paths:', error);
      }
    };

    fetchLearningPaths();
  }, [user]);

  return (
    <div className="dashboard">
      <h1>Your Learning Paths</h1>
      <div className="learning-paths">
        {learningPaths.map((path) => (
          <div key={path.id} className="learning-path">
            <h2>{path.title}</h2>
            <button onClick={() => navigate(`/learning-paths/${path.id}`)}>View Modules</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerDashboard;
