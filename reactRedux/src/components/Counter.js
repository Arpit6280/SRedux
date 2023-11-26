import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
  const dispatch=useDispatch()
 const counter= useSelector(state=> state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }

  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }

  const increment5Handler=()=>{
    dispatch({type:'increment5'})
  }

  const decrement5Handler=()=>{
    dispatch({type:'decrement5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter  </h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increment5Handler}>Increment 5</button>
        <button onClick={decrement5Handler}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
