import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function () {
  return configureStore({ reducer });
}

/*
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
export default function configureStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return store;
}
*/
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : allow us to talk to Devtools
// const store =createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// export default store;

// const store = createStore(reducer, devtoolsEnhancer({ trace: true })); : allow us to talk to Devtools with Tracing Enabled
