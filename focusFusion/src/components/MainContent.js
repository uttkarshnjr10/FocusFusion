import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import DashboardSection from './sections/DashboardSection';
import StudyGroups from './sections/StudyGroups';
import Planner from './sections/Planner';
import Notes from './sections/Notes';
import Music from './sections/Music';
import Library from './sections/Library';
import Analytics from './sections/Analytics';
import Settings from './sections/Settings';
import '../pages/Dashboard.css';
import MindGames from './sections/MindGames';

function MainContent() {
  const {
    activeSection,
    isJoinModalOpen,
    isNotesModalOpen,
    modalTab,
    newGroupName,
    setNewGroupName,
    targetExam,
    setTargetExam,
    createStudyGroup,
    availableGroups,
    joinStudyGroup,
    closeJoinModal,
    closeNotesModal,
    saveNote,
    newNote,
    setNewNote,
  } = useContext(DashboardContext);

  const renderSection = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <DashboardSection />;
      case 'Study Groups':
        return <StudyGroups />;
      case 'Planner':
        return <Planner />;
      case 'Notes':
        return <Notes />;
      case 'MindGames':
        return <MindGames />;
      case 'Music':
        return <Music />;
      case 'Library':
        return <Library />;
      case 'Analytics':
        return <Analytics />;
      case 'Settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="main-content">
      {renderSection()}

      {/* Join Group Modal */}
      {isJoinModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalTab === 'create' ? 'Create Study Group' : 'Join Study Group'}</h2>
            {modalTab === 'create' ? (
              <>
                <input
                  type="text"
                  placeholder="Group Name"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Target Exam"
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                />
                <button onClick={createStudyGroup}>Create Group</button>
              </>
            ) : (
              <ul className="group-list">
                {availableGroups.map((group) => (
                  <li key={group.id} className="group-item">
                    <span>
                      {group.name} - {group.exam}
                    </span>
                    <button
                      className="join-btn"
                      onClick={() => joinStudyGroup(group.id)}
                      disabled={group.members.includes('userName')} // Prevent joining if already a member
                    >
                      Join
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={closeJoinModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Note Modal */}
      {isNotesModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Note</h2>
            <textarea
              placeholder="Write your note here..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <div className="modal-actions">
              <button className="modal-btn" onClick={saveNote}>
                Save Note
              </button>
              <button className="modal-btn cancel" onClick={closeNotesModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;