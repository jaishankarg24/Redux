//Dusk Pattern
//Feature: Bugs slice

import { createAction, createReducer } from "@reduxjs/toolkit";

// const bugUpdated = createAction("bugUpdated");
// console.log(bugUpdated({ id: 1 }));
// console.log(bugUpdated.type);
// console.log(bugUpdated.toString());

//actionCreators- actions
export const bugAdded = createAction("bugAdded"); //type
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// Reducer
let lastId = 0;

export default createReducer([], {
  // Key: value
  // actions: functions (event => event handler)
  // bugAdded
  // Dynamic type
  // state => bugs
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    //Find the index of bug object we want to resolve
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },

  [bugRemoved.type]: (bugs, action) => {
    console.log("State before removing the bug:", bugs);
    const stateObj = JSON.parse(JSON.stringify(bugs));
    console.log("stateObj:", stateObj);
    console.log("Action:", action);
    return bugs.filter((bug) => bug.id !== action.payload.id);
  },
});

//actionTypes
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";
/*
export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});
*/

/*
export default function reducer(state = [], action) {
  switch (action.type) {
    //BUG_ADDED
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id != action.payload.id);

    case bugResolved.type:
      return state.map((bug) =>
        bug.id != action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
*/
