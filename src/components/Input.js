import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form onSubmit={  
        e => {
          e.preventDefault();
          console.log('number', this.refs.number.value)
        }
      }>
        <input type="number" ref="number" />
        <button onClick={() => this.props.addNumber(this.refs.number.value)}> + </button>
        <button> - </button>
      </form>
    )
  }
}

export default Input;