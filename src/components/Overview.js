import { Component } from "react";

class Overview extends Component {
  render() {
    const tasks = this.props.taskList.map((task, index) => (
      <div className="task">
        <li key={index}>{task}</li>
        <button onClick={() => this.props.deleteHandle(index)}>Delete</button>
      </div>
    ));

    return <ul>{tasks}</ul>;
  }
}

export default Overview;
