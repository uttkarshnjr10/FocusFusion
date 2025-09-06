import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../pages/Dashboard.css';

function StudyGroups() {
  const { studyGroups } = useContext(DashboardContext);

  return (
    <div className="section-content">
      <h1>Study Groups</h1>
      {studyGroups.length === 0 ? (
        <p>You haven't joined any study groups yet.</p>
      ) : (
        <div className="resources-grid">
          {studyGroups.map((group) => (
            <div key={group.id} className="resource-card">
              <h3>{group.name}</h3>
              <p>Target Exam: {group.exam}</p>
              <button className="view-btn">View Group</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudyGroups;