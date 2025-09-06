import '../../pages/Dashboard.css';
import React, { useState } from 'react';
import './MindGames.css';

function MindGames() {
    const generateGrid = () => {
        return Array.from({ length: 9 }, () => Array(9).fill(''));
    };
    const [grid, setGrid] = useState(generateGrid());

    const handleChange = (row, col, value) => {
      const updatedGrid = [...grid];
      updatedGrid[row][col] = value;
      setGrid(updatedGrid);
    };
  
    return (
      <div className="sudoku-board">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                className="sudoku-cell"
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
    );
}

export default MindGames;