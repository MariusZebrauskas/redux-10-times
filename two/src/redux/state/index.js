import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counterReducer';
import { userReducer } from './loginReducer';

// combine reducers
const reducers = combineReducers({
  counterReducer,
  userReducer,
});

// create store
export const store = createStore(reducers);
