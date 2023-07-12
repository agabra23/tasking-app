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

    const textInput = document.getElementById("inputField");
    textInput.value = "";
  };

  render() {
    return (
      <>
        <form action="#" id="form">
          <input
            type="text"
            id="inputField"
            onChange={this.updateInput}
          ></input>
          <button onClick={this.clickHandler}>Add Task</button>
        </form>

        <Overview taskList={this.state.listArray} />
      </>
    );
  }
}

export default App;
