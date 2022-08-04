/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ToDo from '../../components/TodoCards';

function MainBoard() {
  /*
 Este useState es para agregar cada columna de las tarjetas. Usa props para colocar el nombre
*/
  const [columns, setColums] = useState([]);
  const [Task, setTask] = useState({});

  const handleSubmit = event => {
    if (event.code === 'Enter' && event.target.value !== '') {
      if (event.target.value.length < 20) {
        const newColumn = {
          name: event.target.value,
          id: Date.now(),
          tasks: [],
        };
        setColums([...columns, newColumn]);
        event.target.value = '';
      } else {
        alert('The column name is too long');
      }
    }
  };

  const onDragOver = ev => {
    ev.preventDefault();
  };

  const taskTaker = Taker => {
    setTask(Taker);
    console.log('🚀 ~ file: index.jsx ~ line 36 ~ MainBoard ~ Taker', Task);
  };

  const onDrop = (ev, newColumnId) => {
    const id = ev.dataTransfer.getData('id');
    console.log('dragOver', id);
    columns.map(column => {
      if (column.id === newColumnId) {
        const newColumn = [...column, Task];
        setColums([newColumn]);
        console.log(columns);
      }
      return column;
    });
  };

  return (
    <div>
      <NavBar />
      <div className='mainBoard'>
        <header className='headerBoard'>
          <input className='nameBoard' type='text' placeholder=' Tittle' />
          <a href='/'>
            {' '}
            <img className='iconsBoard' src='..\img\star-regular.png' alt='' />
          </a>
          <a href='/'>Workspaces name</a>
          <a href='/'>
            <img className='iconsBoard' src='..\img\users-solid.png' alt='' />{' '}
            Workspace visible
          </a>
          <a href='/'>
            <img
              className='iconsBoard'
              src='..\img\share-square-solid.png'
              alt=''
            />{' '}
            Share
          </a>
          <a href='/'>
            <img className='iconsBoard' src='..\img\filter-solid.png' alt='' />{' '}
            Filter
          </a>
          <a href='/'>
            <img
              className='iconsBoard'
              src='..\img\ellipsis-h-solid.png'
              alt=''
            />{' '}
            Show menu
          </a>
        </header>
      </div>

      <div className='workSpace'>
        <div>
          <div>
            <input
              type='text'
              className='textContent buttonCard '
              onKeyDown={handleSubmit}
              placeholder='+ Add a list'
            />
            <div>
              <ul className='list__Columns__Board'>
                {columns.map(column => (
                  <li
                    key={column.id}
                    className='colums'
                    onDragOver={e => onDragOver(e)}
                    onDrop={e => {
                      onDrop(e, column.id);
                    }}
                  >
                    <ToDo column={column} taskTaker={taskTaker} />
                    {column.id}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainBoard;
