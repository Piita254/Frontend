import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home'
import { Navbar } from './components/Navbar'
import LeaderBoard from './components/LeaderBoard';
import Login from './components/auth/Login';
import PathDetails from './components/PathDetails';
import Signup from './components/auth/signup'
import ModuleDetail from './components/Modules';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/leaderboard" element={<LeaderBoard/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/learning_paths/:pathId" element={<PathDetails/>} />
            <Route path="/module_detail/:id" element={<ModuleDetail/>} />
            



          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App