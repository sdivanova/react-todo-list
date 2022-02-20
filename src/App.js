import './App.css';
import React from "react";
import {TodoTask} from './TodoTask'

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      todos:todos
    }

    this.addTodo=this.addTodo.bind(this)
 //   this.countUnchecked=this.countUnchecked.bind(this)
  }

  render(){
      console.log("state on render:",this.state)
      return (
      <div className="App">
        <h1>Todo List!!</h1>

        <div className="FlowRight">
          <span>Total count: {this.state.todos.length}</span>
          <span>Unchecked count: {this.countUnchecked(this.state.todos)}</span>
        </div>

        <button className="NewTodoBtn" onClick={this.addTodo}>New Todo</button>

        <ul className="TodoList">
          {this.state.todos.map((todo) => (
              <TodoTask key={todo.id} todo={todo} changeTodo={this.changeTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
          ))}
        </ul>
      </div>
    );
  }

  addTodo = function (){
    let newtodo=new Todo();
    let newTodos = [...this.state.todos, newtodo]
    this.setState({todos: newTodos});

  }

  countUnchecked = function (todos){
    return todos.filter(todo=>!todo.checked).length;
  }

  changeTodo = function (id){
    console.log("changing todo", id);
    this.setState({todos: this.state.todos.map(todo=>todo.id===id? {...todo, checked:!todo.checked} : todo)})
  }

  deleteTodo = function (id){
    console.log("nuking todo", id);
    this.setState({todos: this.state.todos.filter(todo=>todo.id!==id)})
  }

}

let todos=[
  {
    id:1,
    text:"Task 1",
    checked:true
  },
  {
    id:2,
    text:"Task 2",
    checked:false
  },
  {
    id:3,
    text:"Task 3",
    checked:false
  }
]

let id=4;

class Todo{
  constructor() {
    this.text = this.getText();
    this.checked=false;
    this.id = id++;
  }

  getText(){
    return prompt("Enter task text:")
  }
}

export default App;
