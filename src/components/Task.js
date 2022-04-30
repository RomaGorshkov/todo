import React from 'react';
import '../styles/_task.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai'


export default function Task({ i, state, setState }) {

  const { id, text, completed } = i;

  const removeTask = (id) => setState([...state.filter(item => item.id !== id)])

  const handleChecked = (id) => {
    setState([
      ...state.map(task => 
        task.id === id ? {...task, completed: !completed} : {...task}
      )
    ])
  }

  console.log(i)

  return (
    <div className='tasks'>
      <div className='tasksField'>
        <label className='task'>
          <input type='checkbox' onClick={() => handleChecked(id)} key={id} />
          <span className={completed ? 'done-task' : 'titleTask'}>{text}</span>
          <AiFillEdit className='editTask' /> 
          <FaTrashAlt className='removeTask' onClick={() => removeTask(id)}/>
        </label>
      </div>
    </div>
  )
}
