/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Local components
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

// Utils
import { API_ENDPOINT } from "./utils/config";
import { colors } from "./utils/_var";

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const App = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [showStartButton, setShowStartButton] = useState(true);

  /**
   * useEffect - Fetches the quiz data from the API
   * and sets it to the quizData state
   */
  useEffect(() => {
    fetch(`${API_ENDPOINT}/v1/api/quizzes`)
      .then((response) => response.json())
      .then((data) => setQuizData(data));
  }, []);

  /* ----------------------------- RENDER HELPERS ----------------------------- */
  /**
   * handleOptionSelected - Handles the selection of an option in the quiz
   * and moves to the next question if there is one available
   * @param {*} optionValue - The value of the selected option
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

  /**
   * handleStartQuiz - Starts the quiz by hiding the "Start Personality Test" button
   */
  const handleStartQuiz = () => {
    setShowStartButton(false);
    setCurrentQuestion(0);
  };

  /* -------------------------------- RENDERING ------------------------------- */
  return (
    <div>
      {showStartButton ? (
        <ButtonContainer>
          <Button onClick={handleStartQuiz}>Start Personality Test</Button>
        </ButtonContainer>
      ) : isQuizFinished ? (
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

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 120px;
`;

const Button = styled.button`
  background-color: ${colors.$colorGold};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;
