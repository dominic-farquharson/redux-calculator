import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';

const calculator = combineReducers({
  calculator: calculatorReducer
});

export default calculator;