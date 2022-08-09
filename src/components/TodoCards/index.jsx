import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  handlerChange,
  handlerSubmit,
  handlerDelete,
  handlerOnDrop,
  handlerOnDragEnd,
  handlerOnDragOver,
} from './handlers';
import Card from './Card';

function ToDo({ column, taskTaker, Task }) {
  const [Texto, setTexto] = useState('');
  const [Tasks, setTasks] = useState([]);
  /*   const draggables = document.querySelectorAll('.draggable');
  const containers = document.querySelectorAll('.container'); */

  return (
    <div
      className='ToDo__column'
      onDrop={e => {
        handlerOnDrop(e, column.id, Task, Tasks, setTasks, column);
      }}
      onDragEnd={e => handlerOnDragEnd(e, Task, Tasks, setTasks, column)}
      onDragOver={e => handlerOnDragOver(e)}
    >
      <section className='ToDo__cards'>
        <input
          type='text'
          placeholder={column.name}
          className='ToDo__listTitle__input'
        />
      </section>
      <div className='ToDo__submit'>
        <form onSubmit={e => handlerSubmit(e, Texto, column, Tasks, setTasks)}>
          <input
            className='ToDo__input__text'
            type='text'
            placeholder='+ Add a card...'
            onChange={e => handlerChange(e, setTexto)}
            name='tarea'
            id={column.inputId}
          />
          <button type='submit'>Add</button>
        </form>
        <ul className='ToDo__cardlist' id={column.id}>
          {Tasks.map(card => (
            <Card
              card={card}
              taskTaker={taskTaker}
              Task={Task}
              column={column}
              Tasks={Tasks}
              setTasks={setTasks}
            />
          ))}
        </ul>
        <hr className='ToDo_hr' />
        <span className='ToDo__delete'>
          <button type='button' onClick={() => handlerDelete(Tasks, setTasks)}>
            Press to delete selected
          </button>
        </span>
      </div>
    </div>
  );
}

ToDo.propTypes = {
  column: PropTypes.shape(),
  taskTaker: PropTypes.func,
  Task: PropTypes.shape(),
};
ToDo.defaultProps = {
  column: {},
  Task: {},
  taskTaker: () => null,
};

export default ToDo;
