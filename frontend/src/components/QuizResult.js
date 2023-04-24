/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";

// UI components
import styled from "styled-components";
import { colors } from "../utils/_var";

/* -------------------------------------------------------------------------- */
/*                                 Quiz Result                                */
/* -------------------------------------------------------------------------- */
const QuizResult = ({ answers, onRestartQuiz }) => {
  /* ---------------------------------- HOOKS --------------------------------- */
  /**
   * introversionScore - Sum of the values of the introversion questions
   */
  const introversionScore = answers.reduce(
    (acc, answer) => acc + answer.value,
    0
  );
  /**
   * extroversionScore - Sum of the values of the extroversion questions
   */
  const extroversionScore = answers.reduce(
    (acc, answer) => acc + (4 - answer.value),
    0
  );

  /**
   * result - The result of the quiz
   */
  const result =
    introversionScore > extroversionScore ? "Introvert" : "Extrovert";

  /* -------------------------------- RENDERiNG ------------------------------- */
  return (
    <div>
      <Result>You are a {result}!</Result>
      <ButtonContainer>
        <Button onClick={onRestartQuiz}>Take the quiz again</Button>
      </ButtonContainer>
    </div>
  );
};

const Result = styled.h2`
  margin-bottom: 20px;
`;

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

export default QuizResult;
