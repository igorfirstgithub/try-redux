import redux from "redux";

function increment() {
  return {
    type: "INC",
  };
}

function decrement() {
  return {
    type: "DEC",
  };
}

function reducer(count = 0, action) {
  switch (action.type) {
    case "INC":
      return count + 1;
    case "DEC":
      return count - 1;
    default:
      return count;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
