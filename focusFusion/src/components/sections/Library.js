import '../../pages/Dashboard.css';
import React from 'react';
function Library() {
  return (
    <div className="section-content">
      <h1>Library</h1>
      <div className="resources-grid">
        <div className="resource-card">
          <h3>JEE Materials</h3>
          <p>Notes, past papers, and resources for JEE preparation.</p>
          <button className="view-btn">View</button>
        </div>
        <div className="resource-card">
          <h3>NEET Materials</h3>
          <p>Notes, past papers, and resources for NEET preparation.</p>
          <button className="view-btn">View</button>
        </div>
        <div className="resource-card">
          <h3>CS Materials</h3>
          <p>Notes, past papers, and resources for Computer Science.</p>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  );
}

export default Library;