import React, { useEffect, useState } from 'react';
import * as LearningPathService from '../../services/LearningPathService';
import { useParams } from 'react-router-dom';

const Modules = () => {
  const { id } = useParams();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      const response = await LearningPathService.getModulesForLearningPath(id);
      setModules(response.data);
    };
    fetchModules();
  }, [id]);

  return (
    <div>
      <h1>Modules for Learning Path</h1>
      {modules.map((module) => (
        <div key={module.id} className="module">
          <h2>{module.title}</h2>
          <button onClick={() => navigate(`/quiz/${module.id}`)}>Start Quiz</button>
        </div>
      ))}
    </div>
  );
};

export default Modules;
