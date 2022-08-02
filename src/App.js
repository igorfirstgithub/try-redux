//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/count";
import { addMessage } from "./redux/messages";

function App(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function submit() {
    props.addMes(input);
    setInput("");
    document.getElementById("inputLine").placeholder = "";
  }

  const todoList = props.messages.map((todo, index) => (
    <li key={index}>{todo}</li>
  ));

  return (
    <div>
      <h3>{props.count}</h3>
      <button onClick={props.incCount}>+</button>
      <button onClick={props.decCount}>-</button>
      <br />
      <br />
      <input
        id="inputLine"
        value={input}
        onChange={handleChange}
        placeholder="Enter what to do"
      />
      <button onClick={submit}>Submit</button>
      <ul>{todoList}</ul>
    </div>
  );
}

function mapStateToProps(globalState) {
  return {
    count: globalState.count,
    messages: globalState.messages,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     incCount: () => dispatch(increment()),
//     decCount: () => dispatch(decrement()),
//   };
// }

const mapDispatchToProps = {
  incCount: increment,
  decCount: decrement,
  addMes: addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
