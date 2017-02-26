import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accpet values in constructor', () =>{
    let todo = new Todo({
      title : 'hello',
      finish : true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.finish).toEqual(true);
  });
});
