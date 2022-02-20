import React from "react";

export class TodoTask extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id:props.todo.id,
            text:props.todo.text,
            checked: props.todo.checked,
        }
    }

    render(){
        return (
            <li className="TodoTask">
                <input type="checkbox" defaultChecked={this.state.checked} onChange={()=>this.props.changeTodo(this.state.id)}/>
                <button onClick = {()=>this.props.deleteTodo(this.state.id)}>x</button>
                <span>{this.state.text}</span>
            </li>
    )
    }
}