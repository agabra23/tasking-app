import { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  render() {
    return (
      <>
        <form>
          <input type="text"></input>
          <button>Add Task</button>
        </form>

        <Overview />
      </>
    );
  }
}

export default App;
