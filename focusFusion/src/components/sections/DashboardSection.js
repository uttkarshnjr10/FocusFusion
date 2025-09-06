import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../pages/Dashboard.css';

function DashboardSection() {
  const {
    userName,
    startFocusSession,
    studyGroups,
    openJoinModal,
    openNotesModal,
  } = useContext(DashboardContext);

  return (
    <div className="section-content">
      <h1>Welcome, {userName}! 👋</h1>
      <p>Ready to continue your learning journey?</p>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="action-btn" onClick={startFocusSession}>
          <span className="icon">⏱️</span> Start Focus Session
        </button>
        <button className="action-btn" onClick={() => openJoinModal('join')}>
          <span className="icon">👥</span> Join Study Group
        </button>
        <button className="action-btn" onClick={openNotesModal}>
          <span className="icon">📝</span> Create Note
        </button>
        <button className="action-btn emergency">
          <span className="icon">⚠️</span> Deep Focus
        </button>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-header">
          <h2>Today's Progress</h2>
          <a href="#" className="view-details">View Details</a>
        </div>
        <div className="progress-stats">
          <div className="stat">
            <h3>Study Time</h3>
            <p>1h 20m</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
            <p className="subtext">Daily Goal Progress</p>
          </div>
          <div className="stat">
            <h3>Focus Rate</h3>
            <p>88%</p>
          </div>
          <div className="stat">
            <h3>Sessions</h3>
            <p>4</p>
          </div>
          <div className="stat">
            <h3>Current Streak</h3>
            <p>
              <span className="icon">🔥</span> 5 days
            </p>
            <p className="subtext">Points Earned Today: 100</p>
          </div>
        </div>
      </div>

      {/* Study Groups Section */}
      <div className="study-groups">
        <div className="study-groups-header">
          <h2>Your Study Groups</h2>
          <a href="#" className="view-all">View All</a>
        </div>
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
    </div>
  );
}

export default DashboardSection;