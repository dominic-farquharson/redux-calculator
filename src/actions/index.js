/*
  Action creators
  - returns action (payloads of information)
  - actions are plain objects that MUST have a type key
*/

// add a number
export function addNumber(value) {
  // returning object
  return {
    type: 'ADD_NUMBER',
    value: data
  }
}


// subtract a number
export function subtractNumber(value) {
  // returning action
  return {
    type: 'SUBTRACT_NUMBER',
    value: value
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