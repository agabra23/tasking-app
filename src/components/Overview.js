import { Component } from "react";

class Overview extends Component {
  render() {
    const tasks = this.props.taskList.map((task) => (
      <li key={crypto.randomUUID()}>{task}</li>
    ));

    return <ul>{tasks}</ul>;
  }
}

export default Overview;
