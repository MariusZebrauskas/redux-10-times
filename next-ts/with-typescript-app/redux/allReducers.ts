import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counterReducer';

// all reducers
const reducers = combineReducers({
  counterReducer,
});

// create store
export const store = createStore(reducers);
