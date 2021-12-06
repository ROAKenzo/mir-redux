import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const incrementHandler5 = () => {
    dispatch({ type: "increment5" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const decrementHandler5 = () => {
    dispatch({ type: "decrement5" });
  };
  const resetHandler = () => {
    dispatch({ type: "reset" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggleCounter" });
  };

  return (
    <div>
      <h1>Redux Counter</h1>
      {show && <div>{counter}</div>}

      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={resetHandler}
      >
        Reset
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={incrementHandler}
      >
        Increment
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={decrementHandler}
      >
        Decrement
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={incrementHandler5}
      >
        Increment5
      </button>
      <button
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={decrementHandler5}
      >
        Decrement5
      </button>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={toggleCounterHandler}
        >
          Toggle Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
