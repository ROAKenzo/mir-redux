import { createStore } from 'redux';

const counterReducer = (state = { counter: 0,show:true }, action) => {
  if (action.type === 'reset') {
    return {
      ...state,
      counter: state.counter =0,
    };
  }
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === 'increment5') {
    return {
      ...state,
      counter: state.counter + 5,
    };
  }
  if (action.type === 'decrement5') {
    return {
      ...state,
      counter: state.counter - 5,
    };
  }
  if(action.type==='toggleCounter'){
    return {
      ...state,
      show: !state.show,
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;