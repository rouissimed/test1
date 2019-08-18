import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  private doneList: Array<any> = [];
  private done: any = {};
  todoList=[
    {
      null: 1,
      titre: "compléter projet",
      dateAjout: "15 / 07 / 2019"
    },
    {
      null: 2,
      titre: "compléter cour angular",
      dateAjout: "01 / 08 / 2019"
    },
    {
      null: 3,
      titre: "compléter cour node",
      dateAjout: "03 / 08 / 2019"
    }
  ] ;
  constructor() { }

  ngOnInit() {
  }

  deleteTodo(todo){
     let index = this.todoList.indexOf(todo);
     this.todoList.splice(index,1);
  }
/*
  DoneTodo(todo){
     this.done=todo;
    this.doneList.push(this.done); 

  }
*/
}
