import React, { useState } from 'react';
import './App.css';
import Task from './TaskContainer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const deleteTask = (index) =>{
    const newTasks = tasks.filter((_,i)=> i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>TO-DO App</h1>
      <div className="tasks-container">
        <div>
          <input
            className="task-input"
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button className='addbtn' onClick={addTask}>Add Task</button>
        </div>
        {tasks.map((task, index) => (
          <Task
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
