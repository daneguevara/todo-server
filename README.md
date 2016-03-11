# Todo Services
Node.js web server for providing RESTful services for todo list todos.

# Installation
Install and start mongodb
```
brew install mongodb // mac osx
brew services
brew services start mongodb
```

Clone the repository
```
git clone https://github.com/daneguevara/todo-services
```

Install packages and start server
```
npm install
...
npm start
```

# REST API

## Todo object
```js
var Todo = mongoose.model('Todo', {
  text: String,
  done: Boolean,
  archived: Boolean
});

// Example
{
  _id: 'abc123',
  text: 'create a todo web application.'
  completed: false,
  archived: false
}
```

## GET /api/todos
Return all todos

## POST /api/todos
Create a new todo

## PUT /api/todos/:id
Update, e.g. complete or archive, a todo

## DELETE /api/todos/:id
Remove a todo
