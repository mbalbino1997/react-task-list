import './App.css'
import { tasks } from './assets/tasks'

function App() {

  return (
    <>
      <h1>Task Manager</h1>
      <strong>Current Tasks(4)</strong>
      <ul>
        {tasks.filter(task => task.state === "backlog" || task.state === "in_progress").map(el => (
          <li key={el.id}>
            <h2>{el.title}</h2>
            <p>Priority:{el.priority}</p>
            <p>Est. time:{el.estimatedTime}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
