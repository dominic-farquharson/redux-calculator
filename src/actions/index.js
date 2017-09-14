/*
  Action creators
  - returns action (payloads of information)
  - actions are plain objects that MUST have a type key
*/

// add a number
export function addNumber(value) {
  console.log('adding', value)
  // returning object
  return {
    type: 'ADD_NUMBER',
    value: parseInt(value)
  }
}


// subtract a number
export function subtractNumber(value) {
  // returning action
  return {
    type: 'SUBTRACT_NUMBER',
    value
  }
}

// clear all numbers
export function clear() {
  return {
    type: 'CLEAR'
  }
}

// history of all actions
export function history() {
  return {
    type: 'HISTORY'
  }
}