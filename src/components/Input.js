import React from 'react';

const Input = props => {
  return (
    <form onSubmit={  
      e => {
        e.preventDefault();
      }
    }>
      <input type="number" />
      <button> + </button>
      <button> - </button>
    </form>
  )
}

export default Input;