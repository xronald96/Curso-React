import React from 'react';
const userInput = (props) => {
  return (
    <div> Soy Input
      <input value={props.username} onChange={props.changed} type="text" />
    </div>

  )
}

export default userInput;