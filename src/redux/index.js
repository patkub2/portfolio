import { createStore } from "redux";

export function change() {
  return {
    type: "CHANGE",
  };
}

function reducer(pl = false, action) {
  switch (action.type) {
    case "CHANGE":
      return !pl;
    default:
      return pl;
  }
}

const store = createStore(reducer);
export default store;
