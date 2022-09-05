import React, { useState } from 'react';
import '../styles/_task.scss';

import { Input } from '@mui/material';

import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';

export default function Task({ i, state, setState }) {

  const { id, text, completed, edited } = i;

  const [value, setValue] = useState(text);

  const removeTask = (id) => {
    setState(state.filter(item => item.id !== id))
  };

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
      <div className='tasks-field'>
        <div className='task'>
          {edited ? <div>
            <Input
              value={value}
              onChange={changeNewInput}
            />
            <BiSave
              className='save-edit'
              onClick={() => saveEditTask(id)} />
          </div> : <>
            <input type='checkbox'
              key={id}
              defaultChecked={completed}
              onClick={() => handleChecked(id)}
            />
            <span className={completed ? 'done-task' : 'title-task'}>{text}</span>
            <AiFillEdit
              className='edit-task'
              onClick={() => editTask(id, text)}
            />
            <FaTrashAlt
              className='remove-task'
              onClick={() => removeTask(id)}
            />
          </>}
        </div>
      </div>
    </div>
  )
}
