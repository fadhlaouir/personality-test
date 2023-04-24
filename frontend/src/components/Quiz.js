/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState } from "react";

// UI Components
import styled from "styled-components";

// Utils
import { colors } from "../utils/_var";

/* -------------------------------------------------------------------------- */
/*                               QUIZ COMPONENT                               */
/* -------------------------------------------------------------------------- */
const Quiz = ({ quizData }) => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  /* ----------------------------- RENDER HELPERS ----------------------------- */
  /**
   * handleOptionSelect - Handles the selection of an option
   * @param {*} value value of the option selected
   */
  const handleOptionSelect = (value) => {
    setAnswers([...answers, value]);
    if (currentQuestion < quizData?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is finished, show result
      setCurrentQuestion(quizData.length);
    }
  };

  /**
   * introvertScore - Counts the number of introvert answers
   * in the answers array
   */
  const introvertScore = answers.filter((answer) => answer === "I").length;
  /**
   * extrovertScore - Counts the number of extrovert answers
   * in the answers array
   */
  const extrovertScore = answers.filter((answer) => answer === "E").length;
  /**
   * result - Determines the result of the quiz
   */
  const result =
    introvertScore > extrovertScore
      ? "You are an introvert"
      : "You are an extrovert";

  /* -------------------------------- RENDERING ------------------------------- */
  return (
    <Wrapper>
      {currentQuestion === quizData?.length ? (
        <>
          <Result>{result}</Result>
          <button onClick={() => window.location.reload()}>
            Take the quiz again
          </button>
        </>
      ) : (
        <>
          <Question>{quizData[currentQuestion].question}</Question>
          {quizData[currentQuestion].options.map((option, index) => (
            <Option
              key={index}
              selected={answers[currentQuestion] === option.value}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.option}
            </Option>
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;

/* -------------------------------------------------------------------------- */
/*                                 QUIZ STYLES                                */
/* -------------------------------------------------------------------------- */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Result = styled.h2`
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Option = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.selected ? colors.$colorGold : colors.$colorSilver};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.$colorGold};
    color: #fff;
  }
`;
