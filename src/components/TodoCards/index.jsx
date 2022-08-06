import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function ToDo({ column, taskTaker, Task, columns, setColums }) {
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
    if (document.getElementById(column.id).value !== '') {
      setTasks([...Tasks, object]);
      document.getElementById(column.id).value = '';
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
    console.log('dragstart:', id, columnId);
    ev.dataTransfer.setData('id', id);
    taskTaker(task, setTasks, Tasks);
  };
  /*   const handlerOnDragEnd = () => {
    const movedTasks = Tasks.filter(item => item.columnId !== column.id);
    setTasks(movedTasks);
  }; */
  const handlerDrop = () => {
    if (Task.columnId !== column.id) {
      const droppedTasks = [...Tasks, Task];
      console.log(
        '🚀 ~ file: index.jsx ~ line 48 ~ handlerDrop ~ moveTasks',
        droppedTasks
      );
      const newColumns = columns.map(
        (col => col.id === column.id)
        col.findIdex
      )
      , setColums

      setTasks(droppedTasks);
    }
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
                id={column.id}
              />
            </span>
            <button type='submit'>Add</button>
          </form>
          <ul className='ToDo__cardlist'>
            {Tasks.map(task => (
              <li
                key={task.id}
                className='ToDo__cardlist__item'
                draggable
                onDragStart={e => onDragStart(e, task.id, task.columnId, task)}
                onDrop={handlerDrop(task.columnId)}
                // onDragEnd={e =>handlerOnDragEnd(e, task.id, task.columnId, task)               }
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
  taskTaker: () => null,
  Task: {},
};

export default ToDo;
