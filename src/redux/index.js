import { createStore } from "redux";

const initialState = {
  count: 0,
  messages: [],
};

export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
