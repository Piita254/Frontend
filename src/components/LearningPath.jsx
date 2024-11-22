import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import ModuleDetails from "./ModuleDetail";
import { useNavigate } from "react-router-dom";

const LearningPath = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [learningPath, setLearningPath] = useState(null);
  const [modules, setModules] = useState([]); // State for modules
  const [loading, setLoading] = useState(true);
  const userId = 1; // Replace with the actual user ID (e.g., from context or props)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        setLoading(true);
        // Fetch the learning path data for the specific user
        const response = await axios.get(
          `https://e-learn-ncux.onrender.com/api/user-learning-paths/${userId}/1`
        );
        const path = response.data.learning_path;

        if (path) {
          setLearningPath(path);

          // Fetch the modules for this learning path
          const modulesResponse = await axios.get(
            `https://e-learn-ncux.onrender.com/api/learning_paths/${path.id}/modules`
          );
          setModules(modulesResponse.data); // Update modules state
        }
      } catch (error) {
        console.error("Error fetching learning path or modules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLearningPath();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!learningPath) {
    return <div>No learning path found for this user.</div>;
  }

  const { title, description, id } = learningPath; // Ensure id is destructured

  return (
    <div className="flex-1 p-8">
      <AnimatePresence mode="wait">
        {selectedModule ? (
          <ModuleDetails
            key="module-details"
            module={selectedModule}
            pathId={id}  /* Pass pathId to ModuleDetails */
            onBack={() => setSelectedModule(null)}
          />
        ) : (
          <motion.div
            key="module-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
              <p className="text-slate-600">{description}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Additional Cards or Content */}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-800">Modules</h2>
              </div>
              <div className="divide-y divide-slate-200">
                {modules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedModule(module)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            module.completed ? "bg-emerald-100" : "bg-slate-100"
                          }`}
                        >
                          <CheckCircle2
                            className={`h-6 w-6 ${
                              module.completed
                                ? "text-emerald-600"
                                : "text-slate-400"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">
                            {module.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" /> {module.duration}
                            </span>
                            <span>{module.quizzes.length} Quizzes</span>
                            <span>{module.resources.length} Resources</span>
                          </div>
                        </div>
                      </div>
                      <button                     
                      onClick={() => navigate(`/learnerdash/modules/${path.id}`)}
                       className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LearningPath;
