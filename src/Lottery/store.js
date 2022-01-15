import { createStore, combineReducers } from "redux";

const countdownReducer = (state= {start: {
  min: 0,
  sec: 0
}}, action) => {
  switch (action.type) {
    case "countdown/set":
      console.log(action.start.min);
      console.log(action.sec);
      return { start: {min: action.start.min, sec: action.start.sec} };
    default:
      return state;
  }
}

const candidateReducer = (state = {candidates: []}, action) => {
  switch (action.type) {
    case "candidate/set":
      return { candidates: action.candidates }
    default:
      return state
  }
}

let reducer = combineReducers({countdownReducer, candidateReducer});
let store = createStore(reducer);

export {
  reducer
}

export default store;