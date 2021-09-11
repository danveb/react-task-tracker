import React, { useState } from 'react' 
import Header from './components/Header' 
import Tasks from './components/Tasks' 
import AddTask from './components/AddTask' 
import './App.css';

function App() {

  // initialize state

  // - state for 
  const [showAddTask, setShowAddTask] = useState(false) 

  // - state is immutable (can't change) 
  // - use setTasks to update ([...tasks, newObj])
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment', 
        day: 'Feb 5th at 2:30pm', 
        reminder: true 
    }, 
    {
        id: 2,
        text: 'Meeting at School', 
        day: 'Feb 6th at 1:30pm', 
        reminder: true
    }, 
    {
        id: 3, 
        text: 'Food Shopping', 
        day: 'Feb 5th at 2:30pm',
        reminder: false  
    }
  ]) 

  // Delete Task when clicking button 
  // - pass function as props to Tasks
  const deleteTask = (id) => {
    // console.log('delete', id) 
    // filter tasks
    setTasks(tasks.filter((task) =>  task.id !== id))
  }

  // Toggle Reminder when clicking 
  const toggleReminder = (id) => {
    // console.log(id) 
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Form Submit
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 100000) + 1
    // console.log(id) 

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask && <AddTask onAdd={addTask} /> }

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}

    </div>
  );
}

export default App;