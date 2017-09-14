import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';

/*
  - combinereducers: turns object whose values are 
    different reducing functions int oa single reducing function
  - calls every child reducer and returns a single state object
  - shape of state object matches key of the reducers that were passed  
*/
const calculator = combineReducers({
  // results in key of calculator added to state tree  
  calculator: calculatorReducer,
});

export default calculator;