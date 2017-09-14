import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <form onSubmit={  
          e => {
            e.preventDefault();
          }
        }>
          <input type="number" ref="number" />
        </form>

        <button 
            onClick={
              () => {
                const num = this.refs.number.value;
                if(parseInt(num)) {
                  this.props.addNumber(this.refs.number.value)
                }
              }
            }
        > 
            + 
        </button>
        <button
          onClick={
            () => {
              const num = this.refs.number.value;
              if(parseInt(num)) {
                this.props.subtractNumber(this.refs.number.value)
              }
            }
          }
        > 
          - 
        </button>
        <button
          onClick={
            () => {
              this.props.clear();
            }
          }
        >
          Clear
        </button>
        </div>
    )
  }
}

export default Input;