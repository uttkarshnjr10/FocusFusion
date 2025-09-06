import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import '../pages/Dashboard.css'; 

function Sidebar() {
  const { activeSection, setActiveSection, handleLogout } = useContext(DashboardContext);

  const sections = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Study Groups', icon: '👥' },
    { name: 'Planner', icon: '📅' },
    { name: 'Notes', icon: '📝' },
    { name: 'Music', icon: '🎵' },
    { name: 'Library', icon: '📚' },
    { name: 'Analytics', icon: '📈' },
    { name: 'MindGames', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>StudyFusion</h2>
      </div>
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.name}
            className={`nav-item ${activeSection === section.name ? 'active' : ''}`}
            onClick={() => setActiveSection(section.name)}
          >
            <span className="icon">{section.icon}</span>
            {section.name}
          </button>
        ))}
        {/* Logout Button */}
        <button className="nav-item logout" onClick={handleLogout}>
          <span className="icon">🚪</span>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;