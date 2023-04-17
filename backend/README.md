# Quiz CRUD for Personality Test

[![Author](http://img.shields.io/badge/author-@rfadhlaoui-blue.svg)](https://tn.linkedin.com/in/fadhlaouiraed)

This is a REST API for a Quiz CRUD built with Node.js, Express, MongoDB, Jest for testing, and Swagger for documentation.

## Getting started

To run this project locally, you need to have Node.js and MongoDB installed on your machine.

API Documentation [Swagger] http://localhost:5000/api-docs

## Features

- REST API for Quiz CRUD.
- Included CORS.
- Included API collection for Postman.
- Light-weight project.
- Linting with [Eslint](https://eslint.org/).

## Software Requirements

- Node.js **14+**
- MongoDB **4+**

### Engines

- node **>=14.16.0 <=16.13.0**
- npm **>=6.14.11 <=8.1.0**

## How to install

```bash
cd backend
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## Project structure

```sh
.
├── app.js
├── index.js
├── src
│   ├── __tests__
│   │   └── quiz.test.js
│   ├── controllers
│   │   └── QuizController.js
│   ├── models
│   │   └── Quiz.js
│   ├── routes
│   │   └── QuizRoutes.js
│   └── swagger.json
├── ...
└── package.json
```

## How to run

### Running API server locally

```bash
npm run develop:mac
```

You will know server is running by checking the output of the command `npm run develop:mac` in your terminal.

````bash

```bash
Connected to the database:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
````

**Note:**

`YOUR_DEVELOPMENT_DB_CONNECTION_STRING` will be your MongoDB connection string for `development` environment.

## ESLint

### Running Eslint

```bash
npm run lint:check
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
