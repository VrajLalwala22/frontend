import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'; // Correctly import `thunk` using named imports
import { carsReducer } from './reducers/carsReducer';

const rootReducer = combineReducers({
  carsData: carsReducer, // Use a key like `carsData` to manage state
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Use the imported `thunk` correctly
);

export default store;
