import { useState } from 'react'
import './App.css'
import MovieSelector from './MovieSelector'

function App() {

  // useState instantiation
  const [ currentGenre, setCurrentGenre ] = useState('default');

  return (
    <>
      <h1>Welcome to Movie Selector!</h1>

      <div>
        <select id="genreSelector" name="genre">
          {/* select-a-genre triggers error message */}
          <option value="select-a-genre">Select a genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      
      <div>
        <button name="Fetch Button" value="fetch-button" 
          onClick={()=> setCurrentGenre(document.querySelector('select').value)}>
          Fetch Movies!!
        </button>

        {/* creates prop named "genre", so that's what we pass into MovieSelector.jsx */}
        <MovieSelector genre={currentGenre} />
      </div>
    </>
  )
}

export default App;
