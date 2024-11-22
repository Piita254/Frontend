import React from 'react';
import { BookOpen, Code2, Compass, GraduationCap, Layout, Library, Trophy } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="h-8 w-8 text-emerald-400" />
        <h1 className="text-xl font-bold">CodeMaster</h1>
      </div>

      <nav className="flex-1">
        <div className="space-y-6">
          <div>
            <h2 className="text-slate-400 text-sm font-semibold mb-2">OVERVIEW</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <Layout className="h-5 w-5" />
                Dashboard
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <Compass className="h-5 w-5" />
                Explore Paths
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-slate-400 text-sm font-semibold mb-2">LEARNING</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <BookOpen className="h-5 w-5" />
                My Courses
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <Library className="h-5 w-5" />
                Resources
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <GraduationCap className="h-5 w-5" />
                Certificates
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-slate-400 text-sm font-semibold mb-2">PROGRESS</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-lg cursor-pointer transition-colors">
                <Trophy className="h-5 w-5" />
                Achievements
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mt-auto">
        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Pro Membership</h3>
          <p className="text-sm text-slate-400 mb-3">Upgrade to access all features</p>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
