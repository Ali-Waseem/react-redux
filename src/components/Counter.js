import { counterActions } from '../store';
import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const showCounter = useSelector((state) => state.counterReducer.showCounter);

  const dispatch = useDispatch();


  


  const incrementHandler = () => {
    // dispatch({ type: 'INCREMENT' });
    dispatch(counterActions.increment()); // Using the action creator from the slice
  };

  const decrementHandler = () => {
    // dispatch({ type: 'DECREMENT' });
    dispatch(counterActions.decrement());
  };

  const increaseBy5Handler = () => {
    // dispatch({ type: 'INCREMENT', amount: 5 });
    dispatch(counterActions.increment(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE' });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseBy5Handler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
