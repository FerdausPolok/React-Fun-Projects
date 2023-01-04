import React, { Component } from "react";

export class TodoRows extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() => this.props.callback(this.props.item)}
          />
        </td>
      </tr>
    );
  }
}
