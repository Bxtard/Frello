import React from 'react';
import PropTypes from 'prop-types';
import { handlerChangeCheck, handlerOnDragStart } from './handlers';

function Card({ card, taskTaker, Tasks, setTasks }) {
  const task = card;
  return (
    <li
      id={task.id}
      key={task.id}
      className='ToDo__cardlist__item'
      draggable
      onDragStart={e => handlerOnDragStart(e, task, taskTaker)}
    >
      <input
        type='checkbox'
        onChange={() => {
          handlerChangeCheck(task.id, Tasks, setTasks);
        }}
      />
      {task.title}
      <br />
      {task.id}
      <br />
      {task.columnId}
    </li>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  taskTaker: PropTypes.func,
  Tasks: PropTypes.arrayOf,
  setTasks: PropTypes.func,
};

Card.defaultProps = {
  card: {},
  taskTaker: () => null,
  Tasks: [],
  setTasks: () => null,
};
