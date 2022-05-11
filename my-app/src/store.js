import { legacy_createStore as createStore } from "redux";

export const initState = {
  count: 1,
};

function counterReducer(state = initState, action) {
  console.log(state);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
store.subscribe(() => store.getState());

export default store;
