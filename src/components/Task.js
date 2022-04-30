import React, { useEffect, useState } from 'react';
import '../styles/_task.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';
import { Input } from '@mui/material';


export default function Task({ i, state, setState }) {

  const { id, text, completed, edited } = i;
  const [value, setValue] = useState(text)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state]);

  const removeTask = (id) => setState([...state.filter(item => item.id !== id)]);

  const changeNewInput = (e) => {
    setValue(e.target.value)
  }

  const saveEditTask = (id) => {
  setState([...state.map(t =>
      t.id === id ? { ...t, text: value, edited: !edited } : { ...t }
    )])
  };

  const editTask = (id) => {
    setState([
      ...state.map(edit =>
        edit.id === id ? { ...edit, edited: !edited } : { ...edit }
      )
    ])
  };

  const handleChecked = (id) => {
    setState([
      ...state.map(task =>
        task.id === id ? { ...task, completed: !completed } : { ...task }
      )
    ])
  };

  return (
    <div className='tasks'>
      <div className='tasksField'>
        <div className='task'>
          {edited ? <div>
            <Input
            value={value}
              onChange={changeNewInput}
            />
            <BiSave
              className='saveEdit'
              onClick={() => saveEditTask(id)} />
          </div> : <>
            <input type='checkbox' onClick={() => handleChecked(id)} key={id} />
            <span className={completed ? 'done-task' : 'titleTask'}>{text}</span>
            <AiFillEdit className='editTask' onClick={() => editTask(id, text)} />
            <FaTrashAlt className='removeTask' onClick={() => removeTask(id)} />
          </>}
        </div>
      </div>
    </div>
  )
}
