//console.log("Hello World!");
// Redux Fundamentals
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));

console.log(store.getState());

store.dispatch(bugAdded("Bug1"));

// store.dispatch({ type: "bugAdded", payload: { description: "Bug1" } });
// unsubscribe();
// store.dispatch({ type: "bugRemoved", payload: { id: 1 } });
// console.log(store);
// console.log(store.getState());

// Custom Redux

//import store from "./customStore";
// Directly modifying state
// store.state = 1;
// console.log(store.state);

// store.state = 1;
// console.log(store.state); // 1
// console.log(store); // {state: 1, getState: ƒ}
// console.log(store.getState()); //undefined

// import * as actions from "./actions";

// store.subscribe(() => {
//   console.log("State Changed!");
// });

// store.dispatch(actions.bugAdded("Bug 1"));
// store.unsubscribe();??

// console.log(store.getState());
