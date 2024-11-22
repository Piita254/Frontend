import React from 'react';
import Sidebar from '../components/Sidebar';
import LearningPath from '../components/LearningPath';

const LearnerDashboard = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />
      <LearningPath />
    </div>
  );
};

export default LearnerDashboard;