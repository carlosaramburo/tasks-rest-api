# Task Tracker API
REST API to keep track of tasks created with Node.js, Express.js and MySQL.

## Highlights
- REST API
- SQL based (MySQL)
- CRUD:
    - GET, POST, PUT, DELETE
- Technologies:
    - Node.js, Express.js, MySQL

## Database Design
![design](https://drive.google.com/uc?export=view&id=1qAgilRILoZZtulB9S45bNSpIGzymp9SH)

## Download & Build on Local Machine
### 1) Clone the repository
`git clone https://github.com/carlosaramburo/tasks-rest-api.git`

### 2) Use SQL script to create the database
In order to try the API, there is a script in the root directory of this repo with the DDL for the database and all of the tables.

### 3) Create .env file
For security purposes, the port for the app and credentials for the database are to be stored in a .env file. Create a file in the root directory called '.env' with the following environment variables:
```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### 4) Install node packages and verify routes locally
```
cd tasks-rest-api
npm install
npm start
```
Open your local browser and verify the API is working by accessing:
```http://localhost:5000/tasks/```

If you haven't created any tasks yet, it will return an empty array but it means that the API is working!

## Endpoints
### /tasks
PATH | METHOD | DESCRIPTION
---|---|---
/api/v1/tasks | GET | Retrieves a list with all tasks.
/api/v1/tasks/:id | GET | Retrieves a particular task, including its tags and comments.
/api/v1/tasks/ | POST | Saves the provided task.
/api/v1/tasks/:id | PUT | Updates the specified task.
/api/v1/tasks/:id | DELETE | Deletes the specified task.
/api/v1/tasks/:taskId/:tagId | POST | Links the specified task with a tag.
/api/v1/tasks/:taskId/:tagId | DELETE | Deletes the links between the specified task with a tag.

### /tags
PATH | METHOD | DESCRIPTION
---|---|---
/api/v1/tags | GET | Retrieves a list with all tags.
/api/v1/tags/:id | GET | Retrieves a particular tag.
/api/v1/tags/ | POST | Saves the provided tag.
/api/v1/tags/:id | PUT | Updates the specified tag.
/api/v1/tags/:id | DELETE | Deletes the specified tag.

### /comments
PATH | METHOD | DESCRIPTION
---|---|---
/api/v1/comments | GET | Retrieves a list with all comments.
/api/v1/comments/:id | GET | Retrieves a particular comment.
/api/v1/comments/ | POST | Saves the provided comment.
/api/v1/comments/:id | PUT | Updates the specified comment.
/api/v1/comments/:id | DELETE | Deletes the specified comment.