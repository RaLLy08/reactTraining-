import React from 'react';
import ToDo from '../todo/ToDo';

const ToDoList = (props) => {
    const { todos, onTodoClick } = props;

    return (
      <ul>
        {todos.map((todo, index) => (
      <ToDo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
      </ul>
    );
}

export default ToDoList; 