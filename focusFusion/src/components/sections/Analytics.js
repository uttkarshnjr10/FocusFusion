import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../pages/Dashboard.css';

function Analytics() {
  const { tasks, notes, studyGroups } = useContext(DashboardContext);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="section-content">
      <h1>Analytics</h1>
      <div className="analytics-section">
        <div className="analytics-card">
          <h3>Total Notes</h3>
          <p>{notes.length}</p>
        </div>
        <div className="analytics-card">
          <h3>Study Groups Joined</h3>
          <p>{studyGroups.length}</p>
        </div>
        <div className="analytics-card">
          <h3>Tasks Completed</h3>
          <p>{completedTasks} / {totalTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;