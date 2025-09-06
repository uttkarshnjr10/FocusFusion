import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import '../pages/Dashboard.css'; // Assuming you have a CSS file for styling

function Navbar() {
  const { userName, isFocusSessionActive, focusSessionTime, stopFocusSession } = useContext(DashboardContext);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>StudyFusion</span>
      </div>
      <div className="navbar-user">
        {isFocusSessionActive && (
          <span className="focus-timer">Focus: {formatTime(focusSessionTime)}</span>
        )}
        {isFocusSessionActive && (
          <button className="stop-btn" onClick={stopFocusSession}>Stop</button>
        )}
        <span>{userName} | Study Level 1</span>
      </div>
    </div>
  );
}

export default Navbar;