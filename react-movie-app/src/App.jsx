import { useState } from 'react'
import './App.css'
import MovieSelector from './MovieSelector'

function App() {

  const [ currentGenre, setCurrentGenre ] = useState('default');

  return (
    <>
      <div>
        <select id="genreSelector" name="genre">
          <option value="default">Select a genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>

        <br></br>
        <br></br>

        <button name="Fetch Button" value="fetch-button" 
          onClick={()=> setCurrentGenre(document.querySelector('select').value)}>
          Fetch Movies!!
        </button>

        <MovieSelector genre={currentGenre} />

      </div>
    </>
  )
}

export default App;
