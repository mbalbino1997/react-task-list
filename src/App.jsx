import './App.css'
import { tasks } from './assets/tasks'

function App() {
  const currentTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
  const completedTasks = tasks.filter(task => task.state === "completed");
  return (
    <>
      <h1>Task Manager</h1>
      <strong>Current Tasks(4)</strong>
      <ul>
        {currentTasks.map(el => (
          <li key={el.id}>
            <h2>{el.title} <em>{el.state}</em></h2>
            <p>Priority:{el.priority}</p>
            <p>Est. time:{el.estimatedTime}</p>
          </li>
        ))}
      </ul>
      <strong>Completed Tasks(6)</strong>
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
