import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../pages/Dashboard.css';

function Planner() {
  const { tasks, addTask, toggleTaskCompletion } = useContext(DashboardContext);

  return (
    <div className="section-content">
      <h1>Myspace</h1>
      <div className="todo-list">
        <h3>To-Do List</h3>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <span>{task.subject}: {task.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Planner;