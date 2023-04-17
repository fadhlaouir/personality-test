/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const mongoose = require('mongoose');

/* -------------------------------------------------------------------------- */
/*                                 Quiz Schema                                */
/* -------------------------------------------------------------------------- */
const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [
      {
        option: String,
        value: String,
      },
    ],
    required: true,
  },
});

const Question = mongoose.model('Quiz', quizSchema);

module.exports = Question;
