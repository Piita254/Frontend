import React, { useState } from 'react';
import * as LearningPathService from '../../services/LearningPathService';
import { useNavigate } from 'react-router-dom';

const CreateLearningPath = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLearningPath = { title, description };
    await LearningPathService.createLearningPath(newLearningPath);
    navigate('/contributer-dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Learning Path</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Learning Path</button>
    </form>
  );
};

export default CreateLearningPath;
