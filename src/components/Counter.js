import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/actions/count';
import { selectors } from '../store/selectors/count';
import DefineCounter from './DefineCounter';

const Counter = () => {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleDecrement = () => dispatch(actions.decrement());
  const handleIncrement = () => dispatch(actions.increment());
  const handleMoreTwo = () => dispatch(actions.moreTwo());

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ul>
        <li>
          <button onClick={handleDecrement}>Decrement</button>
        </li>
        <li>
          <button onClick={handleIncrement}>Increment</button>
        </li>
        <li>
          <button onClick={handleMoreTwo}>More Two</button>
        </li>
        <li>
          <DefineCounter />
        </li>
      </ul>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   decrement: () => dispatch(actions.decrement()),
//   increment: () => dispatch(actions.increment()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
