import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import {Todo} from "./todo";

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllTodos()', () =>{
    it('should return an empty array by default', inject([TodoDataService],(service: TodoDataService) =>{
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({ title: 'Hello!', finish: false});
      let todo2 = new Todo({ title: 'Hi!', finish:true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () =>{
    it('should assign id incrementally', inject([TodoDataService],(service: TodoDataService)=>{
      let todo1 = new Todo({title: 'Hi', finish: false});
      let todo2 = new Todo({title: 'Hey', finish: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById(id)',() =>{
    it('should remove corresponding ID', inject([TodoDataService], (service: TodoDataService) =>{
      let todo1 = new Todo({ title:'Hey', finish: false});
      let todo2 = new Todo({ title:'Hello', finish: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos());
    }));

    it('should do nothing if ID does not found', inject([TodoDataService], (service: TodoDataService)=>{
      let todo1 = new Todo({ title:'Hi', finish: false });
      let todo2 = new Todo({ title:'Hey', finish: true });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#updateTodoById(id, values)', ()=>{
    it('should return corresponding id and updated data', inject([TodoDataService],(service: TodoDataService)=>{
      let todo = new Todo({ title: 'Oi', finish: true});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(1,{
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if id does not match', inject([TodoDataService],(service:TodoDataService)=>{
      let todo = new Todo({title:'hI', finish:false});
      service.addTodo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: 'new Title'
      });
      expect(updatedTodo).toEqual(null);
    }));
  });

  describe('#toogleTodoComplete(todo)',()=>{
    it('should return the updated todo with complete status', inject([TodoDataService], (service:TodoDataService)=>{
      let todo = new Todo({title:'Hi', finish: false});
      service.addTodo(todo);

      let updatedTodo = service.toogleTodoComplete(todo);
      expect(updatedTodo.finish).toEqual(true);
      service.toogleTodoComplete(todo);
      expect(updatedTodo.finish).toEqual(false);
    }));
  });
});
