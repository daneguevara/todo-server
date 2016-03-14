'use strict';

var api = require('./api');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();
var port = 9999;
app.use(cors());
app.use(morgan('dev'));     // log requests to the console
app.use(bodyParser.json()); // parse bodies for requests with the content-type header of application/json

mongoose.connect('mongodb://localhost/todo');

// routes
app.get('/api/todos', api.todo.get);
app.post('/api/todos', api.todo.post);
app.put('/api/todos/:id', api.todo.put);
app.delete('/api/todos/:id', api.todo.delete);

// start server
app.listen(port);
console.log('Listening on port ' + port);
