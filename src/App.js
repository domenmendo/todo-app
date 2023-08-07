import React, { useState } from 'react';
import './App.css';
import Task from './TaskContainer';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';


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
      <Header title="TO-DO app"/>
      <div className="tasks-container">
        <div>
          <input
            className="task-input"
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button className="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>
        {tasks.map((task, index) => (
          <Task
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
