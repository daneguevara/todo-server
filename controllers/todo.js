var Todo = require('../models/todo');

module.exports = {

  // return all todos
  index: function (req, res) {
    Todo.find(function (err, todos) {
      res.send(err || todos);
    });
  },

  // return single todo
  show: function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
      res.send(err || todo);
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
    Todo.update({ _id: req.params.id }, req.body, function (err, updated) {
      res.send(err || updated);
    });
  },

  // remove a todo
  delete: function (req, res) {
    Todo.remove({ _id: req.params.id }, function (err, deleted) {
      res.send(err || deleted);
    });
  }
};
