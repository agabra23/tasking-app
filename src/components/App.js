import { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  state = {
    listArray: [],
    inputField: "",
  };

  updateInput = (event) => {
    this.setState({ inputField: event.target.value }, () => {
      console.log(this.state.inputField);
    });
  };

  clickHandler = () => {
    this.setState(
      (prevState) => {
        return { listArray: [...prevState.listArray, prevState.inputField] };
      },
      () => {
        console.log(this.state.listArray);
      }
    );

    this.setState({ inputField: "" });
  };

  render() {
    const { listArray, inputField } = this.state;

    return (
      <>
        <form action="#" id="form">
          <input
            type="text"
            id="inputField"
            value={inputField}
            onChange={this.updateInput}
          ></input>
          <button onClick={this.clickHandler}>Add Task</button>
        </form>

        <Overview taskList={listArray} />
      </>
    );
  }
}

export default App;
