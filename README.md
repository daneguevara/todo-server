# todo-server

# Installation
Install mongodb, run the mongo daemon, and set up a todo database
```
brew install mongodb
...
brew info mongodb // caveats section indicates how to run the daemon
...
mongo // open mongo shell
```

Clone this repository

```
https://github.com/daneguevara/todo-server
```

Install node packages
```
npm install
```

Start server
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
