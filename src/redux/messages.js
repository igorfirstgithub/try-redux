export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    payload: message,
  };
}

function messagesReducer(messages = [], action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...messages, action.payload];
    default:
      return messages;
  }
}

export default messagesReducer;
