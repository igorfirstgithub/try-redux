//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, addMessage } from "./redux";

function App(props) {
  const [input, setInput] = useState("qwe");
  //const [messages, setMessages] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function submit() {
    props.addMes(input);
    setInput("");
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
      <input value={input} onChange={handleChange} />
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
