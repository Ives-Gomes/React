const INITIAL_STATE = {
  counter: 0,
};

export default function counterReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'MORE_TWO':
      return {
        ...state,
        counter: state.counter + 2,
      };
    case 'HANDLE_COUNTER':
      return {
        ...state,
        counter: action.newCounter,
      };
    default:
      return state;
  }
}
