/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Models
const Quiz = require('../models/Quiz');

/* -------------------------------------------------------------------------- */
/*                               Quiz Controller                              */
/* -------------------------------------------------------------------------- */
/**
 * Creates a new quiz in the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Returns the newly created quiz as a JSON response or a
 * 400 Bad Request error if there was an error saving the quiz to the database.
 */
const createQuiz = (req, res) => {
  const quiz = new Quiz(req.body);
  quiz
    .save()
    .then((newQuiz) => {
      res.status(201).json(newQuiz);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

/**
 * Retrieves all quizzes from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Returns an array of quizzes as a JSON response or a 500
 *  Internal Server Error if there was an error retrieving the quizzes from the database.
 */
const getAllQuizzes = (req, res) => {
  Quiz.find()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
/**
 * Retrieves a quiz from the database by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Returns the quiz as a JSON response or a 404 Not Found error
 *  if the quiz with the specified ID was not found in the database, or a 500 Internal Server Error if there was an error retrieving the quiz from the database.
 */
const getQuizById = (req, res) => {
  Quiz.findById(req.params.id)
    .then((quiz) => {
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
/**
 * Updates a quiz in the database by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Returns the updated quiz as a JSON response or a 404 Not
 * Found error if the quiz with the specified ID was not found in the database,
 * or a 500 Internal Server Error if there was an error updating the quiz in the database.
 */
const updateQuizById = (req, res) => {
  Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((quiz) => {
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
/**
 * Deletes a quiz from the database by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} Returns a 204 No Content response or a 404 Not Found error
 * if the quiz with the specified ID was not found in the database, or a 500
 * Internal Server Error if there was an error deleting the quiz from the database.
 */
const deleteQuizById = (req, res) => {
  Quiz.findByIdAndDelete(req.params.id)
    .then((quiz) => {
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
};
