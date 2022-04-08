// types

import { type } from 'os';

type AddTypes = {
  type: 'add';
  payload?: number;
};
type MinusTypes = {
  type: 'minus';
  payload?: number;
};

type Types = AddTypes | MinusTypes;

// actions
export const addnumber = (nr: number): AddTypes => {
  return {
    type: 'add',
    payload: nr,
  };
};
export const minus = (nr: number): MinusTypes => {
  return {
    type: 'minus',
    payload: 1 | nr,
  };
};

// reducer

export const counterReducer = (state = 0, action: Types) => {
  switch (action.type) {
    case 'add':
      if (action.payload) {
        return state + action.payload;
      } else {
        return state;
      }
    case 'minus':
      if (action.payload) {
        return state - action.payload;
      } else {
        return state;
      }

    default:
      return state;
  }
};
