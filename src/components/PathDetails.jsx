import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';
import Quiz from './Quiz';
import Modules from './Modules';

function PathDetails() {
  const { pathId } = useParams();
  const [path, setPath] = useState(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    // Fetch the learning path details
    const fetchLearningPath = async () => {
      try {
        const response = await fetch(`https://e-learn-ncux.onrender.com/api/learning_paths/${pathId}`);
        if (!response.ok) {
          throw new Error('Learning path not found');
        }
        const data = await response.json();
        setPath(data);
      } catch (error) {
        console.error('Error fetching learning path:', error);
      }
    };

    fetchLearningPath();
  }, [pathId]);

  if (!path) {
    return <div>Loading...</div>;
  }

  const activeModule = path.modules?.[activeModuleIndex];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">{path.title}</h1>
          <p className="text-lg text-indigo-100 mb-4">{path.description}</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              {path.modules?.length || 0} modules
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                path.difficulty === 'beginner'
                  ? 'bg-green-500'
                  : path.difficulty === 'intermediate'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
            >
              {path.difficulty}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Modules</h2>
            <div className="space-y-2">
  {path.modules?.map((module, index) => (
    <Link
      key={module.id}
      to={`/modules/${module.id}`}
      className={`w-full text-left p-4 rounded-lg flex items-center justify-between ${
        index === activeModuleIndex
          ? 'bg-indigo-50 text-indigo-600'
          : 'hover:bg-gray-50'
      }`}
    >
      <span className="flex items-center">
        {index <= activeModuleIndex ? (
          <CheckCircle className="h-5 w-5 mr-2" />
        ) : (
          <Lock className="h-5 w-5 mr-2" />
        )}
        {module.title}
      </span>
    </Link>
  ))}
</div>

          </div>

          <div className="lg:col-span-2">
            {!showQuiz ? (
              <div>
                {activeModule ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6">{activeModule.title}</h2>
                    {activeModule.resources?.map((resource) => (
                      <div key={resource.id} className="bg-gray-50 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.content}</p>
                        {resource.url && (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-700"
                          >
                            View Resource →
                          </a>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Take Quiz
                    </button>
                  </>
                ) : (
                  <div>No module selected</div>
                )}
              </div>
            ) : (
              <Quiz
                quiz={activeModule?.quiz}
                onComplete={() => {
                  if (activeModuleIndex < (path.modules?.length || 0) - 1) {
                    setActiveModuleIndex(activeModuleIndex + 1);
                    setShowQuiz(false);
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PathDetails;
