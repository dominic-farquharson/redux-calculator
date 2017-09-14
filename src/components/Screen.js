import React from 'react';

const Screen = props => {
  const style ={
    width: '100px',
    height: '100px',
    border: '1px dashed red',
    margin: '0 auto'

  }
  return (
    <div style={style}>
      {props.total}
    </div>
  )
}

export default Screen;