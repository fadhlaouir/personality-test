/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const mongoose = require('mongoose');

// Models
const Quiz = require('../models/Quiz');

/* -------------------------------------------------------------------------- */
/*                               QUIZ TEST CRUD                               */
/* -------------------------------------------------------------------------- */

describe('Quiz Model Test', () => {
  // Connect to MongoDB before running the tests
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Test the Quiz model
  describe('Quiz', () => {
    // Define a sample quiz
    const quizData = {
      question: 'What is the capital of France?',
      options: [
        { option: 'A', value: 'Paris' },
        { option: 'B', value: 'Rome' },
        { option: 'C', value: 'Madrid' },
      ],
    };

    // Test the quiz creation and saving
    it('creates and saves a quiz successfully', async () => {
      const quiz = new Quiz(quizData);
      const savedQuiz = await quiz.save();
      expect(savedQuiz._id).toBeDefined();
      expect(savedQuiz.question).toBe(quizData.question);
      expect(savedQuiz.options).toEqual(quizData.options);
    });

    // Test the quiz validation
    it('throws a validation error if required fields are missing', async () => {
      const quizWithoutQuestion = new Quiz({
        options: [
          { option: 'A', value: 'Paris' },
          { option: 'B', value: 'Rome' },
          { option: 'C', value: 'Madrid' },
        ],
      });
      let err;
      try {
        await quizWithoutQuestion.save();
      } catch (error) {
        err = error;
      }
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(err.errors.question).toBeDefined();
    });

    // Test the quiz deletion
    it('deletes a quiz successfully', async () => {
      const quiz = new Quiz(quizData);
      await quiz.save();
      await Quiz.findByIdAndDelete(quiz._id);
      const deletedQuiz = await Quiz.findById(quiz._id);
      expect(deletedQuiz).toBeNull();
    });
  });

  // Disconnect from MongoDB after running the tests
  afterAll(async () => {
    await mongoose.disconnect();
  });
});
