import { createStore, combineReducers } from "redux";

const COUNTDOWN_PENDING = "pending";
const COUNTDOWN_START = "start";
const COUNTDOWN_FINISH = "finish";

const countdown_status = {
  COUNTDOWN_PENDING,
  COUNTDOWN_START,
  COUNTDOWN_FINISH
}

const countdownReducer = (state= {
  data: {
    min: 0,
    sec: 0,
    status: COUNTDOWN_PENDING
  }
}, action) => {
  switch (action.type) {
    case "countdown/set":
      return { data: {status: state.data.status, min: action.data.min, sec: action.data.sec} };
    case "countdown/setStatus":
      return { data: {status: action.data.status, min: state.data.min, sec: state.data.sec} }
    default:
      return state;
  }
}

const candidateReducer = (state = {
  data: {
    candidates: [],
    random_index: -1
  }
}, action) => {
  switch (action.type) {
    case "candidate/set":
      return { data: { candidates: action.candidates, random_index: state.data.random_index} }
    case "candidate/draw":
      return { data: { candidates: state.data.candidates, random_index: action.random_index} }
    default:
      return state
  }
}

let reducer = combineReducers({countdownReducer, candidateReducer});
let store = createStore(reducer);

export {
  reducer
}

export {
  countdown_status
}

export default store;