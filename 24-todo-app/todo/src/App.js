import React, { Component } from "react";
import { Header } from "./components/Header";
import { TodoRows } from "./components/TodoRows";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Polok",
      todoItems: [
        { action: "Buy Egg", done: true },
        { action: "Buy Rice", done: false },
        { action: "Buy Chicken", done: false },
      ],
      newTodo: "",
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = (event) => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone} />
    ));

  toggleDone = (todo) => {
    console.log(todo);
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <Header name={this.state.userName} />
        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newTodo}
            onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.newTodo}>
            Add Task
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
