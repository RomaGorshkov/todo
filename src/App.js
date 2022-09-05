import React, { useEffect, useState } from 'react';
import './styles/_app.scss';
import { Reorder } from 'framer-motion';
import Header from './components/Header';
import Main from './components/Main';
import Task from './components/Task';

function App() {

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state]);

  const variants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    animate: {
      opacity: 1,
      height: 'auto',
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  }

  return (
    <div className='App'>
      <Header />
      <h2 className='tasksCount'>Tasks count: {state.length}</h2>
      <Main
        state={state}
        setState={setState}
      />
      <Reorder.Group axis='y' values={state} onReorder={setState}>
        {state.map((i, index) => (
          <Reorder.Item
          key={i.id}
          value={i}
          {...variants}>
              <Task
                key={index}
                i={i}
                state={state}
                setState={setState}
              />
            </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default App;