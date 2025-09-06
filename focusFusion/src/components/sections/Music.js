import '../../pages/Dashboard.css';
import React from 'react';
function Music() {
  return (
    <div className="section-content">
      <h1>Music</h1>
      <div className="music-player">
        <h3>Focus Playlist</h3>
        <div className="music-controls">
          <button className="control-btn">▶️ Play</button>
          <button className="control-btn">⏸️ Pause</button>
          <button className="control-btn">⏹️ Stop</button>
        </div>
        <ul className="music-list">
          <li>Ambient Study Music</li>
          <li>Classical Focus Tracks</li>
          <li>Lo-Fi Beats</li>
          <li>Nature Sounds</li>
        </ul>
      </div>
    </div>
  );
}

export default Music;