import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

import './Counter.module.css';
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  console.log(count);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandler5 = () => {
    dispatch(counterActions.increment5());
  };
  const decrementHandler5 = () => {
    dispatch(counterActions.decrement5());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.reset());
  };
  return (
    <div>
      <h1>Redux Counter</h1>
      {show && <div>{count}</div>}
      <div className='button-container'>
        <button className='btn' onClick={resetCounterHandler}>
          Reset
        </button>
        <button className='btn' onClick={incrementHandler}>
          Increment
        </button>
        <button className='btn' onClick={decrementHandler}>
          Decrement
        </button>
        <button className='btn' onClick={incrementHandler5}>
          Increment5
        </button>
        <button className='btn' onClick={decrementHandler5}>
          Decrement5
        </button>
        <div>
          <button className='btn' onClick={toggleCounterHandler}>
            Toggle Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
