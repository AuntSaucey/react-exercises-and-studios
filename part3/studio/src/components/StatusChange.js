import { useState } from 'react';

export default function StatusChange () {
   const[notes, setNotes] = useState('');
   const[triedRecipe, setTriedRecipe] = useState('');

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted notes:', notes);
   }

   return (
      <div style={{ paddingTop: '50px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Have you tried this recipe? Add your notes here:{' '}
            <input
              type="text"
              value={notes}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
  
        {notes && <p>My Recipe Notes: {notes}</p>}
  
        <p>
          I have {triedRecipe ? '' : 'not'} tried this recipe!
        </p>
      </div>
    );
  }