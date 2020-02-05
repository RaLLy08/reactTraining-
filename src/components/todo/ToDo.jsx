import React from 'react';

const ToDo = (props) => {
  const { onClick, completed, text } = props;
  console.log('todo', props);
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  );
}


export default ToDo;
