import React, { useEffect, useState } from 'react';
import * as QuizService from '../../services/LearningPathService'; 
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { moduleId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await QuizService.getQuizByModuleId(moduleId);
      setQuiz(response.data);
    };
    fetchQuiz();
  }, [moduleId]);

  const handleSubmit = async (answers) => {
    // Submit quiz answers and update progress
    await QuizService.submitQuizAnswers(moduleId, answers);
    alert('Quiz Submitted!');
  };

  return (
    <div>
      <h1>Quiz</h1>
      {quiz ? (
        <form onSubmit={(e) => handleSubmit(e.target.elements)}>
          {quiz.questions.map((question) => (
            <div key={question.id}>
              <label>{question.text}</label>
              {question.options.map((option) => (
                <div key={option.id}>
                  <input type="radio" name={`question-${question.id}`} value={option.id} />
                  <span>{option.text}</span>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit Quiz</button>
        </form>
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default Quiz;
