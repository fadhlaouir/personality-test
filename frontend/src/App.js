/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState, useEffect } from "react";

// Local components
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

// Utils
import { API_ENDPOINT } from "./utils/config";

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const App = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/v1/api/quizzes`)
      .then((response) => response.json())
      .then((data) => setQuizData(data));
  }, []);

  /* ----------------------------- RENDER HELPERS ----------------------------- */
  /**
   * handleOptionSelected - Handles the selection of an option in the quiz
   * and moves to the next question if there is one available
   * @param {*} optionValue
   */
  const handleOptionSelected = (optionValue) => {
    setSelectedOptions([...selectedOptions, optionValue]);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  /**
   * handleRestartQuiz - Restarts the quiz by resetting the current
   * question and selected options to 0
   */
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
  };
  /**
   * isQuizFinished - Checks if the quiz is finished
   */
  const isQuizFinished = currentQuestion === quizData.length - 1;

  /* -------------------------------- RENDERING ------------------------------- */
  return (
    <div>
      {isQuizFinished ? (
        <QuizResult
          answers={selectedOptions}
          onRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <Quiz
          quizData={quizData}
          currentQuestion={currentQuestion}
          onOptionSelected={handleOptionSelected}
        />
      )}
    </div>
  );
};

export default App;
