import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/auth/UserContext';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LeaderBoard from './components/Gamifications/LeaderBoard';
import Login from './components/auth/Login';
import Signup from './components/auth/signup';
import PathDetails from './components/learner/PathDetails';
import ModuleDetail from './components/learner/Modules';
import UserProfile from './components/shared/UserProfile';
import PointsAchievements from './components/Gamifications/PointsAchievements';
import Comments from './components/learner/Comments';
import ResourcePage from './components/learner/ResourcePage';

function App() {
  const { user } = useContext(UserContext); // Access user from context

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
