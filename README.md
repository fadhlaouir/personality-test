# Personality Test Application

This is a simple personality test application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application takes 3-5 different questions, maps them into a score, and produces a personality trait of either Introvert or Extrovert.

## Table of Contents

- Installation
- Usage
- API Endpoints
- Technologies Used
- Contributing
- License
- Installation

##### To install and run this application locally, follow these steps:

Clone this repository using Git:

```
git clone https://github.com/your-username/personality-test-app.git
```

Install the dependencies for the server:

```
cd personality-test-app/server
npm install
```

##### Install the dependencies for the client:

```
cd ../client
npm install
```

##### Set up the environment variables:

```
cd ..
cp .env.example .env
```

Edit the .env file to set the necessary environment variables (e.g., PORT, MONGODB_URI).

#### Start the server and client:

```
npm run dev
```

Open your browser and go to http://localhost:3000 to see the application running.

#### Usage

To use the application, follow these steps:

- On the landing screen, click the "Start Personality Test" button.

- On the personality test screen, answer the questions by selecting one of the options.

- Once you answer all the questions, click the "Submit" button.

- On the finish screen, you will see your personality trait based on your answers.

#### API Endpoints

The server has the following CRUD API endpoints for managing the questions:

| HTTP Method |    Endpoint    |       Description |
| ----------- | :------------: | ----------------: |
| GET         | /api/questions | Get all questions |

GET /api/questions/:id Get a question by ID
POST /api/questions Create a new question
PUT /api/questions/:id Update a question by ID
DELETE /api/questions/:id Delete a question by ID
Technologies Used
This application uses the following technologies:

MongoDB: A NoSQL database for storing the questions and their scores.
Express.js: A backend web framework for building the server and APIs.
React: A frontend library for building the user interface and components.
Node.js: A backend JavaScript runtime for running the server and APIs.
Axios: A Promise-based HTTP client for making API requests from the frontend.
Mongoose: A MongoDB object modeling tool for creating the database schema and models.
Jest: A JavaScript testing framework for writing unit tests for the APIs and components.
Supertest: A library for testing HTTP requests and responses.
Contributing
Contributions are welcome! If you have any issues or suggestions, please open an issue or pull request.

License
This application is licensed under the MIT License.
