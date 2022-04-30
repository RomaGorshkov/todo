import React, { useEffect, useState } from 'react';
import { Button, Input } from '@mui/material';
import { v4 } from 'uuid';
import '../styles/_main.scss';

export default function Main(props) {
  const { state, setState } = props

  const [input, setInput] = useState('');

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])

  const addPost = () => {
    if (input.trim() !== '') {
      const newTask = {
        id: v4(),
        text: input,
        completed: false
      }
      setState([...state, newTask])
      setInput('')
    } else {
      alert('Enter task')
    }
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      addPost()
    }
  }

  return (
    <div className='main'>
      <div className='addTask'>
        <Input
          value={input}
          className='inputTask'
          placeholder='I need to...'
          onKeyDown={onKeyDown}
          onChange={changeInput} />
        <Button className='buttonTask' onClick={addPost}>Add task</Button>
      </div>
    </div>
  )
}