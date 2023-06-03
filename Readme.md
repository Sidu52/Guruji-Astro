# Todo App API with JWT Authentication

This project is a RESTful API for a Todo App built using Node.js, Express, and MongoDB. It includes JWT (JSON Web Token) authentication to secure the API endpoints.

## Technologies

- Node.js
- Express.js
- MongoDB

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>

## Install the dependencies

2. cd <path>

npm install

##  Set up the environment variables:
3. Create a .env file in the root directory.
Add the following variables:

PORT=<port-number>
MONGODB_URI=<mongodb-connection-string>
JWT_SECRET=<jwt-secret-key>
Mongoose_Cluster_Name=<Mongoose_cluster_name>
Mongoose_PASSWORD= <Mongoose_Password>
## Start the server:
npm start

The API server will run at http://localhost:<port-number>.


# API

Authentication
POST /user/tasks/register: Register a new user. Requires a username and password in the request body.
POST /user/tasks/login: Authenticate user and generate a JWT token. Requires a username and password in the request body.

Task Management
POST /todo: Create a new task. Requires a name,description and status  in the request body. Returns a success message.
GET /todo: Get all tasks for the authenticated user.
GET /todo/:_id: Get a specific task by its ID.
PUT /todo/:id: Update a task by its ID. Requires a name, description, and status in the request body. Returns a success message.
DELETE todo/:id: Delete a task by its ID. Returns a success message.

# Error Handling
If an error occurs, the API will respond with an appropriate status code and a JSON error message.
