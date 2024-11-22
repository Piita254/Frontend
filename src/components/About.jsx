import React from 'react';
import { Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Code2 className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-slate-900">
          About Us
        </h2>
        <p className="mt-4 text-center text-base text-slate-600">
          We are committed to providing the best learning experience for our users. Our platform offers a variety of learning paths tailored to your needs, with engaging resources and gamification features to keep you motivated.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="mt-2 text-sm text-slate-600">
            To empower individuals worldwide through accessible and engaging education, enabling them to achieve their goals and unlock their full potential.
          </p>

          <h3 className="mt-6 text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="mt-2 text-sm text-slate-600">
            A world where everyone has equal opportunities to learn and grow, regardless of their background or circumstances.
          </p>

          <h3 className="mt-6 text-xl font-bold text-slate-900">Core Values</h3>
          <ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
            <li>Accessibility</li>
            <li>Innovation</li>
            <li>Community</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
