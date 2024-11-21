import React, { useEffect, useState } from 'react';
import * as LearningPathService from '../../services/LearningPathService';
import { useNavigate, useParams } from 'react-router-dom';

const EditLearningPathForm = () => {
  const { id } = useParams();
  const [learningPath, setLearningPath] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLearningPath = async () => {
      const response = await LearningPathService.getLearningPathById(id);
      setLearningPath(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
    };
    fetchLearningPath();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedLearningPath = { title, description };
    await LearningPathService.updateLearningPath(id, updatedLearningPath);
    navigate('/contributer-dashboard');
  };

  return learningPath ? (
    <form onSubmit={handleSubmit}>
      <h1>Edit Learning Path</h1>
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
      <button type="submit">Save Changes</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default EditLearningPathForm;
