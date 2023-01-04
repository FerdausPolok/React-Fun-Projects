import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Polok",
      todoItems: [
        { action: "Buy Egg", done: false },
        { action: "Buy Rice", done: false },
        { action: "Buy Chicken", done: false },
      ],
    };
  }

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
      </tr>
    ));

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Name1" ? "Name2" : "Name1",
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">
            {this.state.userName} Todo List
          </h2>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <tbody>{this.todoRows()}</tbody>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
