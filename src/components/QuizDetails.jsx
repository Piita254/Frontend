import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const QuizDetails = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [quizDetails, setQuizDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://e-learn-ncux.onrender.com/api/quizzes/${quizId}`
        );

        const data = response.data;

        // Parse the malformed options into a valid array
        const parsedOptions = JSON.parse(data.options.join("").replace(/\\|"/g, ""));

        setQuizDetails({
          ...data,
          options: parsedOptions, // Replace the options field with the parsed array
        });
      } catch (err) {
        console.error("Error fetching quiz details:", err);
        setError("Failed to load quiz. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [quizId]);

  if (loading) {
    return <div>Loading quiz...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!quizDetails || !quizDetails.options || quizDetails.options.length === 0) {
    return <div>No options available for this quiz.</div>;
  }

  const { question, options, correct_answer } = quizDetails;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true); // Show the answer after an option is selected
  };

  const handleQuizCompletion = () => {
    alert("Quiz completed!");
    navigate(-1); // Navigate back after quiz completion
  };

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Quiz</h1>
        <p className="text-slate-600">{question}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="mt-6 space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedOption === option
                  ? option === correct_answer
                    ? "bg-emerald-100 border-emerald-500"
                    : "bg-red-100 border-red-500"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer} // Disable buttons after an option is selected
            >
              {option}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div className="mt-6 p-4 rounded-lg border bg-slate-50">
            <h3 className="text-sm font-medium text-slate-700">
              Correct Answer:{" "}
              <span className="font-bold text-emerald-600">{correct_answer}</span>
            </h3>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleQuizCompletion}
          className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Finish Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizDetails;
