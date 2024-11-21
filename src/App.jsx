import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearnerDashboard from './components/learner/LearnerDashboard';
import ContributerDashboard from './components/contributer/ContributerDashboard';
import CreateLearningPath from './components/contributer/CreateLearningPath';
import EditLearningPathForm from './components/contributer/EditLearningPathForm';
import Modules from './components/learner/Modules';
import PathDetails from './components/learner/PathDetails';
import Quiz from './components/learner/Quiz';
import ResourceDetail from './components/learner/ResourceDetail';
import Login from './components/auth/Login'
import ProtectedRoute from './components/shared/ProtectedRoute';
// import Unauthorized from './components/Unauthorized'; // remember to add Unauthorized page

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<LearnerDashboard />} />
        
        {/* Learner Routes */}
        <Route
          path="/learner-dashboard"
          element={
            <ProtectedRoute allowedRoles={['Learner']}>
              <LearnerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Contributor Routes */}
        <Route
          path="/contributer-dashboard"
          element={
            <ProtectedRoute allowedRoles={['Contributor']}>
              <ContributerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-learning-path"
          element={
            <ProtectedRoute allowedRoles={['Contributor']}>
              <CreateLearningPath />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-learning-path/:id"
          element={
            <ProtectedRoute allowedRoles={['Contributor']}>
              <EditLearningPathForm />
            </ProtectedRoute>
          }
        />

        {/* Common Routes for All Users */}
        <Route
          path="/modules/:pathId"
          element={
            <ProtectedRoute allowedRoles={['Learner', 'Contributor']}>
              <Modules />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/path-details/:id"
          element={<PathDetails />}
        />

        <Route
          path="/quiz/:moduleId"
          element={<Quiz />}
        />

        <Route
          path="/resource-detail/:id"
          element={<ResourceDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;

