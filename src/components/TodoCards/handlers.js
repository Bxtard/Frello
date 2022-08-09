export const handlerChange = (e, setTexto) => {
  setTexto(e.target.value);
};

export const handlerSubmit = (e, Texto, column, Tasks, setTasks) => {
  e.preventDefault();
  const object = {
    title: Texto,
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
export const handlerChangeCheck = (id, Tasks, setTasks) => {
  const newTasks = Tasks.map(task => {
    if (task.id === id) {
      task.checked = !task.checked;
    }
    return task;
  });
  setTasks(newTasks);
};
export const handlerDelete = (Tasks, setTasks) => {
  const newTasks = Tasks.filter(task => task.checked === false);
  setTasks(newTasks);
};

export const handlerOnDragStart = (_ev, task, taskTaker) => {
  document.getElementById(task.id).className = 'ToDo__cardlist__item--dragged';
  taskTaker(task);
};
export const handlerOnDragEnd = (_e, task, Tasks, setTasks, column) => {
  document.getElementById(task.id).className = 'ToDo__cardlist__item';
  const movedTasks = Tasks.filter(item => item.columnId === column.id);
  setTasks(movedTasks);
};
export const handlerOnDrop = (
  _e,
  newColumnId,
  Task,
  Tasks,
  setTasks,
  column
) => {
  if (Task.columnId !== column.id) {
    Task.columnId = newColumnId;
    const droppedTasks = [...Tasks, Task];
    setTasks(droppedTasks);
  }
};

export const handlerOnDragOver = ev => {
  ev.preventDefault();
};
