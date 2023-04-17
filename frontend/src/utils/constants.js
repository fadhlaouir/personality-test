/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */
// process
export const { REACT_APP_DEVELOPMENT_API_URL, REACT_APP_PRODUCTION_API_URL } =
  process.env;

export const fakeData = [
  {
    question: "I prefer spending time alone over being with others.",
    options: [
      { option: "Strongly Agree", value: "I" },
      { option: "Agree", value: "I" },
      { option: "Disagree", value: "E" },
      { option: "Strongly Disagree", value: "E" },
    ],
  },
  {
    question: "How do you feel at parties?",
    options: [
      { option: "I love parties and socializing with new people", value: "E" },
      { option: "I feel awkward and uncomfortable at parties", value: "I" },
    ],
  },
  {
    question: "How do you prefer to spend your free time?",
    options: [
      { option: "Spending time with friends or family", value: "E" },
      { option: "Reading a book or watching a movie alone", value: "I" },
    ],
  },
  {
    question: "How do you approach decision-making?",
    options: [
      {
        option: "I weigh the pros and cons and make logical decisions",
        value: "T",
      },
      {
        option: "I follow my gut and make decisions based on my feelings",
        value: "F",
      },
    ],
  },

  {
    question: "What motivates you at work?",
    options: [
      { option: "Achieving goals and recognition from others", value: "E" },
      {
        option: "Working independently and solving complex problems",
        value: "I",
      },
    ],
  },
];
