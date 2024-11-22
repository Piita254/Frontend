 import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle2, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuizDetails from "./QuizDetails";

const ModuleDetail = ({ module, pathId, onBack }) => {
  const [moduleDetail, setModuleDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For error handling
  const { moduleId } = useParams(); // Get moduleId from route params (optional)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModuleDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the provided module ID or fallback to `module.id`
        const id = module ? module.id : moduleId;

        const response = await axios.get(
          `https://e-learn-ncux.onrender.com/api/modules/${id}`
        );
        setModuleDetail(response.data); // Set the fetched module details
      } catch (err) {
        console.error("Error fetching module details:", err);
        setError("Failed to load module details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (module || moduleId) {
      fetchModuleDetail();
    }
  }, [module, moduleId]);

  if (loading) {
    return <div>Loading module details...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!moduleDetail) {
    return <div>No details found for this module.</div>;
  }

  const { title, description, quizzes, resources } = moduleDetail;

  return (
    <div className="flex-1 p-8">
      {/* Module Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
        <p className="text-slate-600">{description}</p>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">Resources</h2>
        </div>
        <div className="divide-y divide-slate-200">
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                <h3 className="font-semibold text-slate-800 mb-1">{resource.title}</h3>
                <p className="text-slate-600 text-sm">{resource.description}</p>
                <a
                  href={resource.url} // Assuming resources have a URL field
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Resource
                </a>
              </div>
            ))
          ) : (
            <div className="p-6 text-slate-600">No resources available for this module.</div>
          )}
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">Quizzes</h2>
        </div>
        <div className="divide-y divide-slate-200">
          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                <h3 className="font-semibold text-slate-800 mb-1">{quiz.title}</h3>
                <p className="text-slate-600 text-sm">{quiz.description}</p>
              <button
                onClick={() => navigate(`/learnerdash/quiz/${quiz.id}`)} // Navigate to the specific quiz detail
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                    Start Quiz
                  </button>
              </div>
            ))
          ) : (
            <div className="p-6 text-slate-600">No quizzes available for this module.</div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Learning Path
        </button>
      </div>
    </div>
  );
};

export default ModuleDetail;
