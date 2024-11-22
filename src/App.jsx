import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup'
import ModuleDetail from './components/ModuleDetail';
import ContributorDashboard from './components/ContributerDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import LearningPath from './components/LearningPath';
import Contacts from './components/Contacts';
import About from './components/About';
import EditLearningPath from './components/EditLearningPath';
import CreateLearningPath from './components/CreateLearningPath';
import Resources from './components/Resources';
import QuizDetails from './components/QuizDetails';

function App() {
  return (
    <Router>
      <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/contributordash" element={<ContributorDashboard />} />
            <Route path="/contributor/paths/:id/edit" element={<EditLearningPath />} />
            <Route path="/contributor/paths/create" element={<CreateLearningPath />} />
            <Route path="/learnerdash" element={<LearnerDashboard />} />
            <Route path="/learning_paths/:pathId" element={<LearningPath/>} />
            <Route path="/module_detail/:id" element={<ModuleDetail/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/learnerdash/modules/:moduleid" element={<Resources/>} />
            <Route path="/learnerdash/quiz/:quizid" element={<QuizDetails/>} />



            
          </Routes>
    </Router>
  )
}

export default App