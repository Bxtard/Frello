import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function ToDo({ column, taskTaker, Task }) {
  const [Texto, setTexto] = useState('');
  const [Tasks, setTasks] = useState([]);

  const handlerChange = evt => {
    setTexto(evt.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const object = {
      texto: Texto,
      checked: false,
      id: Date.now(),
      columnId: column.id,
    };
    if (document.getElementById(column.inputId).value !== '') {
      setTasks([...Tasks, object]);
      document.getElementById(column.inputId).value = '';
    } else {
      alert('Please, introduce a card.');
    }
  };
  const handlerChangeCheck = id => {
    const newTasks = Tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks(newTasks);
  };
  const handlerDelete = () => {
    const newTasks = Tasks.filter(task => task.checked === false);
    setTasks(newTasks);
  };

  const onDragStart = (ev, id, columnId, task) => {
    document.getElementById(task.id).className =
      'ToDo__cardlist__item--dragged';
    taskTaker(task);
  };
  const handlerOnDragEnd = (_e, task) => {
    document.getElementById(task.id).className = 'ToDo__cardlist__item';
    const movedTasks = Tasks.filter(item => item.columnId === column.id);
    setTasks(movedTasks);
  };
  const handlerOnDrop = (_e, newColumnId) => {
    if (Task.columnId !== column.id) {
      Task.columnId = newColumnId;
      const droppedTasks = [...Tasks, Task];
      setTasks(droppedTasks);
    }
  };

  const onDragOver = ev => {
    ev.preventDefault();
  };

  return (
    <div className='.ToDo'>
      <div className='ToDo__column'>
        <div className='ToDo__cards'>
          <span className='ToDo__listTitle'>
            <input
              type='text'
              placeholder={column.name}
              className='ToDo__listTitle__input'
            />
          </span>
        </div>
        <div className='ToDo__submit'>
          <form onSubmit={handlerSubmit}>
            <span className='ToDo__input'>
              <input
                className='ToDo__input__text'
                type='text'
                placeholder='+ Add a card...'
                onChange={handlerChange}
                name='tarea'
                id={column.inputId}
              />
            </span>
            <button type='submit'>Add</button>
          </form>
          <ul className='ToDo__cardlist' id={column.id}>
            {Tasks.map(task => (
              <li
                id={task.id}
                key={task.id}
                className='ToDo__cardlist__item'
                draggable
                onDragStart={e => onDragStart(e, task.id, task.columnId, task)}
                onDrop={e => {
                  handlerOnDrop(e, column.id);
                }}
                onDragEnd={e => handlerOnDragEnd(e, task)}
                onDragOver={e => onDragOver(e)}
              >
                <input
                  type='checkbox'
                  onChange={() => {
                    handlerChangeCheck(task.id);
                  }}
                />
                {task.texto}
                <br />
                {task.id}
                <br />
                {task.columnId}
              </li>
            ))}
          </ul>
          <hr className='ToDo_hr' />
          <span className='ToDo__delete'>
            <button type='button' onClick={handlerDelete}>
              Press to delete selected
            </button>
          </span>
        </div>
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
