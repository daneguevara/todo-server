'use strict';

describe('api/todo', function () {

  beforeEach(function () {
    this.api = require('../../controllers/api')
    this.Todo = require('../../models/todo');

    spyOn(this.Todo, 'find');
    spyOn(this.Todo, 'findById');
    spyOn(this.Todo, 'create');
    spyOn(this.Todo, 'update');
    spyOn(this.Todo, 'remove');
  });

  describe('index', function () {
    it('finds all todos in the db', function () {
      this.api.todo.index();

      expect(this.Todo.find).toHaveBeenCalled();
    });
  });

  describe('show', function () {
    it('finds a todo in the db', function () {
      this.api.todo.show({
        params: {
          id: '123'
        }
      });

      expect(this.Todo.findById).toHaveBeenCalledWith('123', jasmine.any(Function));
    });
  });

  describe('post', function () {
    it('creates a new todo in the db', function () {
      this.api.todo.post({
        body: {
          text: 'abc'
        }
      });

      expect(this.Todo.create).toHaveBeenCalledWith({
        text: 'abc',
        done: false,
        archived: false
      }, jasmine.any(Function));
    });
  });

  describe('put', function () {
    it('updates a todo in the db', function () {
      this.api.todo.put({
        params: {
          id: '123'
        },
        body: {
          text: 'abc'
        }
      });

      expect(this.Todo.update).toHaveBeenCalledWith({
        _id: '123'
      }, {
        text: 'abc'
      }, jasmine.any(Function));
    });
  });

  describe('delete', function () {
    it('deletes a todo in the db', function () {
      this.api.todo.delete({
        params: {
          id: '123'
        }
      });

      expect(this.Todo.remove).toHaveBeenCalledWith({ _id: '123' }, jasmine.any(Function));
    });
  });
});
