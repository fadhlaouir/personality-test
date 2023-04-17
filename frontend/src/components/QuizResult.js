/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";

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
      <h2>You are a {result}!</h2>
      <button onClick={onRestartQuiz}>Take the quiz again</button>
    </div>
  );
};

export default QuizResult;
