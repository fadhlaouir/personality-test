/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
// Database
const mongoose = require('mongoose');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

// config
dotenv.config();

// const
const app = express();

// DATABASE CONNECTION
mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  },
);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Require APIs
const quizRoutes = require('./src/routes/QuizRoutes');

// local APIs
app.use('/v1/api', quizRoutes);

// API for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
