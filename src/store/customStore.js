// function createStore() {
//   let state;

//   return {
//     state,
//   };
// }

import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribers
    for (let i = 0; i < listners.length; i++) {
      listners[i]();
    }

    // with more validation
  }

  function subscribe(listner) {
    listners.push(listner);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
export default createStore(reducer);

// const store = createStore(reducer);
// export default store;
