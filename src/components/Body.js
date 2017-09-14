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
      <Input />
    </div>
  )
}

export default Body;