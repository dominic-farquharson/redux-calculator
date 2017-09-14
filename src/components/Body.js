import React from 'react';
import Input from './Input';
import Screen from './Screen';

// horrible name!
const Body = props => {
  return (
    <div>
      <Screen 
        total={props.total}
      />
      <Input
        addNumber={props.actions.addNumber}
        subtractNumber={props.actions.subtractNumber}
       />
    </div>
  )
}

export default Body;