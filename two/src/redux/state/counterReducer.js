// actions
export const add = (nr) => {
  return {
    type: 'add',
    payload: nr,
  };
};
export const minus = (nr) => {
  return {
    type: 'minus',
    payload: nr,
  };
};

// reducer
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload;
    case 'minus':
      return state - action.payload;
    default:
      return state;
  }
};
