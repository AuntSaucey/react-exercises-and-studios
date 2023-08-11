import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label:'Board 1', value:'board 1'},
      {label:'Board 2', value:'board 2'},
      {label:'Board 3', value:'board 3'}
   ];

   const [boardName, setBoardName] = useState('');

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{ paddingTop: '50px' }}>
        <label>Save to Board: </label>
        <select value={boardName} onChange={handleChange}>
          <option value="">Select a board</option>
          {boards.map((board) => (
            <option key={board.value} value={board.value}>
              {board.label}
            </option>
          ))}
        </select>
  
        {boardName && <p>Saved to {boardName}!</p>}
      </div>
    );
  }