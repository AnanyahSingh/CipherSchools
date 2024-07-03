// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  NAME = "Ananya!";
  render() {
    return (
      <>
      <div>
        <h1>This is {this.NAME}</h1>
      </div>
      <div>
        <p>This is paragraph and name is: {this.NAME}</p>
      </div>
      </>
    );
  }
}

export default App;
