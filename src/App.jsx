import './App.css'
import { tasks } from './assets/tasks'

function App() {
  const currentTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
  const completedTasks = tasks.filter(task => task.state === "completed");
  return (
    <>
      <h1 style={{ backgroundColor: 'aqua', marginTop: '20px', marginBottom: '20px' }}>Task Manager</h1>
      <strong>Current Tasks({currentTasks.length})</strong>
      <ul>
        {currentTasks.map(el => (
          <li key={el.id}>
            <h2>{el.title} <em>{el.state}</em></h2>
            <p>Priority:{el.priority}</p>
            <p>Est. time:{el.estimatedTime}</p>
          </li>
        ))}
      </ul>
      <hr />
      <strong>Completed Tasks({completedTasks.length})</strong>
      <ul>
        {completedTasks.map(el => (
          <li key={el.id}>
            <h2>{el.title} <em>{el.state}</em></h2>
            <p>Priority:{el.priority}</p>
            <p>Est. time:{el.estimatedTime}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
