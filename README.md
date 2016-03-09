# todo-server

# Installation
1. Install mongodb, run the mongo daemon, and set up a todo database
2. Clone this repository
```
https://github.com/daneguevara/todo-server
```
3. Install node packages
```
npm install
```
4. Start server
```
npm start
```

# REST API
## GET /api/todos
Return all todos

## POST /api/todos
Create a new todo

## PUT /api/todos/:id
Update, e.g. complete or archive, a todo

## DELETE /api/todos/:id
Remove a todo
