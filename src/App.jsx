import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/shared/ProtectedRoute'; // Role-checking component
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/signup';
import AdminDashboard from './components/admin/AdminDashboard';
import ContributerDashboard from './components/contributer/ContributerDashboard';
import CreateLearningPath from './components/contributer/CreateLearningPath';
import EditLearningPathForm from './components/contributer/EditLearningPathForm';
import Discussion from './components/learner/Discussion';
import Modules from './components/learner/Modules';
import PathDetails from './components/learner/PathDetails';
import Quiz from './components/learner/Quiz';
import ResourceDetail from './components/learner/ResourceDetail';
import Navbar from './components/shared/Navbar';
import LeaderBoard from './components/shared/LeaderBoard';
import LearnerDashboard from './components/learner/LearnerDashboard';

const App = () => {
    return (
        <Router>
          <div className='min-h-screen bg-gray-50'>
            <Navbar />
            <Routes>
                {/* Shared Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="/leaner" element={<LearnerDashboard/>} />
                <Route path="/contributer" element={<ContributerDashboard />} />
                <Route path="/contributer/path" element={<CreateLearningPath />} />
                <Route path="/edit-learning-path/:id" element={<EditLearningPathForm />} />
                <Route path="/admin" element={<AdminDashboard />} />




                Admin Routes
                {/* <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                /> */}

                {/* Contributor Routes */}
                {/* <Route
                    path="/contributer/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['contributer']}>
                            <ContributerDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contributer/create"
                    element={
                        <ProtectedRoute allowedRoles={['contributer']}>
                            <CreateLearningPath />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/contributer/edit"
                    element={
                        <ProtectedRoute allowedRoles={['contributer']}>
                            <EditLearningPathForm />
                        </ProtectedRoute>
                    }
                /> */}

                {/* Learner Routes */}
                {/* <Route
                    path="/learner/paths"
                    element={
                        <ProtectedRoute allowedRoles={['learner']}>
                            <LearnerDashboard />
                        </ProtectedRoute>
                    }
                /> */}
                {/* <Route
                  path="/learner/path/:id"
                  element={
                       <ProtectedRoute allowedRoles={['learner']}>
                          <PathDetails />
                        </ProtectedRoute>
                  }
        /> */}
                {/* <Route
                    path="/learner/modules"
                    element={
                        <ProtectedRoute allowedRoles={['learner']}>
                            <Modules />
                        </ProtectedRoute>
                    }
                /> */}
                {/* <Route
                    path="/learner/discussion"
                    element={
                        <ProtectedRoute allowedRoles={['learner']}>
                            <Discussion />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/learner/resource"
                    element={
                        <ProtectedRoute allowedRoles={['learner']}>
                            <ResourceDetail />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/learner/quiz"
                    element={
                        <ProtectedRoute allowedRoles={['learner']}>
                            <Quiz />
                        </ProtectedRoute>
                    }
                /> */}
            </Routes>
            </div>
        </Router>
    );
};

export default App;
