import React from 'react';
import PropTypes from 'prop-types';
import { handlerChangeCheck, handlerOnDragStart } from './handlers';

function Card({ card, taskTaker, Tasks, setTasks }) {
  return (
    <li
      id={card.id}
      className='ToDo__cardlist__item'
      draggable
      onDragStart={e => handlerOnDragStart(e, card, taskTaker)}
    >
      <input
        type='checkbox'
        onChange={() => {
          handlerChangeCheck(card.id, Tasks, setTasks);
        }}
      />
      {card.title}
      <br />
      {card.id}
      <br />
      {card.columnId}
    </li>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape(),
  taskTaker: PropTypes.func,
  Tasks: PropTypes.arrayOf(PropTypes.shape()),
  setTasks: PropTypes.func,
};

Card.defaultProps = {
  card: {},
  taskTaker: () => null,
  Tasks: [],
  setTasks: () => null,
};
