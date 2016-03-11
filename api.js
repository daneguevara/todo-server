'use strict';

var Todo = require('./todo.js');

module.exports = {

    // return all todos
    get: function (req, res) {
      Todo.find(function (err, todos) {
        res.send(err || todos);
      });
    },

    // create a todo
    post: function (req, res) {
      Todo.create({
        text: req.body.text,
        done: false,
        archived: false
      }, function (err, created) {
        res.send(err || created);
      });
    },

    // update a todo
    put: function (req, res) {
      Todo.update({_id: req.params.id}, req.body, function (err, updated) {
        res.send(err || updated);
      });
    },

    // remove a todo
    delete: function (req, res) {
      Todo.remove({_id: req.params.id}, function (err, deleted) {
        res.send(err || deleted);
      });
    }
};
