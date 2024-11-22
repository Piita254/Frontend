import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Master Coding with Expert-Led Learning Paths
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our community of learners and contributors to enhance your programming skills through structured learning paths and interactive content.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
              <p className="text-slate-600">
                Follow carefully crafted learning paths designed by industry experts.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-slate-600">
                Learn from and contribute to our growing community of developers.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Certificates</h3>
              <p className="text-slate-600">
                Get recognized for your achievements with completion certificates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;