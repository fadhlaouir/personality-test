/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
const router = require('express').Router();

// controllers
const quizController = require('../controllers/QuizController');

/* -------------------------------------------------------------------------- */
/*                                 Quiz Route                                 */
/* -------------------------------------------------------------------------- */

// POST request - create a new quiz
router.post('/quiz', quizController.createQuiz);

// GET request - get all quizzes
router.get('/quizzes', quizController.getAllQuizzes);

// GET request - get a single quiz
router.get('/quizzes/:id', quizController.getQuizById);

// PUT request - Update a single quiz
router.put('/quizzes/:id', quizController.updateQuizById);

// DELETE request - delete a single quiz
router.delete('/quizzes/:id', quizController.deleteQuizById);

module.exports = router;
