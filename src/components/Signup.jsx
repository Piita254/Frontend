import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('learner');  // State to track role selection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here call your signup API to register the user
    
    localStorage.setItem('role', role);  //

    // Redirect user based on the role
    if (role === 'learner') {
      navigate('/learnerdash');
    } else {
      navigate('/contributordash');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Code2 className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-slate-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="text-emerald-600 hover:text-emerald-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Other form fields (Name, Email, Password) remain unchanged */}

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-700">
                I want to
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                value={role}
                onChange={(e) => setRole(e.target.value)}  // Update state with selected role
              >
                <option value="learner">Learn new skills</option>
                <option value="contributor">Contribute learning content</option>
              </select>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-slate-900">
                I agree to the{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-500">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
