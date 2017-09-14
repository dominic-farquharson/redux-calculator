// calculator reducer
/*
  Reducer is a pure function
  Takes current state + action, returns next state
  does not mutate state
*/

const initialState = {
  total: 0,
  history: []
};


const calculatorReducer = (state = initialState, action) => {
  console.log('state before reducer', state)
  switch(action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        total: state.total + action.value
      }  
    case 'SUBTRACT_NUMBER':
    return {
      ...state,
      total: state.total - action.value
    }  
    default:
      return state;
  }
}

export default calculatorReducer;