import React from 'react';
import { Sparkles, TrendingUp, Clock } from 'lucide-react';
import LearningPathList from '../learner/LearningPathList';

function Home() {
  return (
    <div className="space-y-12">
      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Together, Grow Together
          </h1>
          <p className="text-xl text-gray-600">
            Join our community of learners and contributors to master new skills
            through interactive paths and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
            <Sparkles className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Featured Paths</h3>
            <p>Curated learning paths to help you achieve your goals</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 text-white">
            <TrendingUp className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Trending Now</h3>
            <p>Most popular paths among our community</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <Clock className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Recently Added</h3>
            <p>Latest paths and resources from our contributors</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add content or cards here when ready */}
          <LearningPathList/>
        </div>
      </section>
    </div>
  );
}
export default Home;
