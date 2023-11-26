const redux = require("redux");

//2
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
 else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  else if (action.type === "decrementBy2") {
    return {
      counter: state.counter - 2,
    };
  }
  else if (action.type === "incrementBy2") {
    return {
      counter: state.counter +2,
    };
  }
  return state;
};

//1
const store = redux.createStore(counterReducer);

// console.log(store.getState());

//3
const counterSubscriber = () => {
  const lateststate = store.getState();
  console.log(lateststate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

store.dispatch({ type: "incrementBy2" });
store.dispatch({ type: "decrementBy2" });