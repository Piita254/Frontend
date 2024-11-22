import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
  Layout,
  BookOpen,
  Plus,
  Edit3,
  List,
  Settings,
  LogOut
} from 'lucide-react';

const ContributorDashboard = () => {
  const navigate = useNavigate();
  const [learningPaths, setLearningPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLearningPaths = async () => {
      try {
        const response = await Axios.get('https://e-learn-ncux.onrender.com/api/learning_paths');
        setLearningPaths(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch learning paths');
        setLoading(false);
      }
    };

    fetchLearningPaths();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="w-64 bg-white border-r border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Edit3 className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h2 className="font-semibold">Contributor</h2>
            <p className="text-sm text-slate-600">Dashboard</p>
          </div>
        </div>

        <nav className="space-y-6">
          <div>
            <div className="text-sm font-medium text-slate-600 mb-2">Overview</div>
            <Link
              to="/contributor"
              className="flex items-center gap-3 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors"
            >
              <Layout className="h-5 w-5" />
              Dashboard
            </Link>
          </div>

          <div>
            <div className="text-sm font-medium text-slate-600 mb-2">Content</div>
            <div className="space-y-1">
              <Link
                to="/contributor/paths/create"
                className="flex items-center gap-3 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors"
              >
                <Plus className="h-5 w-5" />
                Create Path
              </Link>
              <Link
                to="/contributor/paths"
                className="flex items-center gap-3 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors"
              >
                <List className="h-5 w-5" />
                My Paths
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-slate-600 mb-2">Account</div>
            <div className="space-y-1">
              <Link
                to="/contributor/settings"
                className="flex items-center gap-3 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
              <button
                className="flex items-center gap-3 text-slate-700 hover:bg-slate-50 p-2 rounded-lg transition-colors w-full"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-1 p-8">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-emerald-200 transition-colors"
              >              
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{path.title}</h3>
                    {/* <p className="text-sm text-slate-600">{path.modulesCount} Modules</p> */}
                    
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span><strong>{path.description}</strong> </span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Created at:</span><span>{path.created_at}</span>
                  {/* <span>{path.status}</span> */}
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/contributor/paths/${path.id}/edit`)}
                    className="text-emerald-600 hover:text-emerald-800 font-medium"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContributorDashboard;
