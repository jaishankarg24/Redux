//console.log("Hello World!");
// Redux Fundamentals
import configureStore from "./store/configureStore";
//import { bugAdded, bugRemoved, bugResolved } from "./store/actions";
import * as actions from "./store/bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(actions.bugAdded("Bug1"));
store.dispatch(actions.bugAdded("Bug2"));

store.dispatch(actions.bugResolved(1));

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());

store.dispatch(actions.bugAdded("Bug1"));

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
