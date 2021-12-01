import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const incrementHandler5 = () => {
    dispatch({ type: 'increment5' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const decrementHandler5 = () => {
    dispatch({ type: 'decrement5' });
  };
  const resetHandler= () => {
    dispatch({ type: 'reset' });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div >
        <button  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={resetHandler}>Reset</button>
        <button  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={incrementHandler}>Increment</button>
        <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={decrementHandler}>Decrement</button>
        <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={incrementHandler5}>Increment5</button>
        <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={decrementHandler5}>Decrement5</button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;