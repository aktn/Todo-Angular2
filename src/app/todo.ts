export class Todo {
  id: number;
  title: string = '';
  finish: boolean = false;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
