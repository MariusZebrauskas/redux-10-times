import { counterReducer } from './counterReducer';
import { combineReducers, createStore } from 'redux';
import { userReducer } from './loginReducer';
const reducers = combineReducers({
  counterReducer,
  userReducer,
});

export const store = createStore(reducers);
