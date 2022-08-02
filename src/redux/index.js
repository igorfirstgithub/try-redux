import { createStore, combineReducers } from "redux";
import countReducer from "./count";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  count: countReducer,
  messages: messagesReducer,
});

const store = createStore(rootReducer);

export default store;
