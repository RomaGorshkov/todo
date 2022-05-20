import React, { useEffect, useState } from 'react';
import './styles/_app.scss';
import Header from './components/Header';
import Main from './components/addTodo';
import Task from './components/Task';

function App() {

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state]);

  return (
    <div className='App'>
      <Header />
      <h2 className='tasksCount'>Tasks count: {state.length}</h2>
      <Main
        state={state}
        setState={setState}
      />
      {state.map((i, index) => (
        <Task
          key={index}
          i={i}
          state={state}
          setState={setState}
        />
      ))}
    </div>
  );
}

export default App;