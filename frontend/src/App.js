/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Local components
import Quiz from "./components/Quiz";

// Utils
import { API_ENDPOINT } from "./utils/config";
import { colors } from "./utils/_var";

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const App = () => {
  /* ---------------------------------- HOOKS --------------------------------- */
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
   * handleStartQuiz - Starts the quiz by hiding the "Start Personality Test" button
   */
  const handleStartQuiz = () => {
    setShowStartButton(false);
  };

  /* -------------------------------- RENDERING ------------------------------- */
  return (
    <div>
      {showStartButton ? (
        <ButtonContainer>
          <Button onClick={handleStartQuiz}>Start Personality Test</Button>
        </ButtonContainer>
      ) : (
        <Quiz quizData={quizData} />
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
