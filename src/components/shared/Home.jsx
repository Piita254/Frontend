import React from "react";
import { Sparkles, TrendingUp, Clock } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Learning Platform!
          </h1>
          <p className="text-xl text-gray-600">
            Explore curated learning paths, engage with the community, and grow
            your skills.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
            <Sparkles className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Featured Paths</h3>
            <p>Curated learning paths to help you achieve your goals.</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 text-white">
            <TrendingUp className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Trending Now</h3>
            <p>Most popular paths among our community.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <Clock className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Recently Added</h3>
            <p>Explore the latest contributions from our members.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section>
        <div className="bg-indigo-600 text-white text-center py-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start your learning journey?
          </h2>
          <p className="text-lg mb-6">
            Sign up to access personalized paths and more!
          </p>
          <a
            href="/signup"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium shadow-md hover:bg-indigo-50"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
