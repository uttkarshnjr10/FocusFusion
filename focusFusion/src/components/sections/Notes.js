import { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import '../../pages/Dashboard.css';

function Notes() {
  const { notes } = useContext(DashboardContext);

  return (
    <div className="section-content">
      <h1>Notes</h1>
      {notes.length === 0 ? (
        <p>No notes created yet.</p>
      ) : (
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-card">
              <p>{note.content}</p>
              <small>{new Date(note.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notes;