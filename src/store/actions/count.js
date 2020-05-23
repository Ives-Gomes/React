const actions = {
  decrement: () => ({
    type: 'DECREMENT',
  }),
  increment: () => ({
    type: 'INCREMENT',
  }),
  moreTwo: () => ({
    type: 'MORE_TWO',
  }),
  handleCounter: (newCounter) => ({
    type: 'HANDLE_COUNTER',
    newCounter: newCounter,
  }),
};

export { actions };
