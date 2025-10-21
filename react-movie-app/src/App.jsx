import { useState } from 'react'
import './App.css'
import MovieSelector from './MovieSelector'

function App() {

  return (
    <>
      <div>
        <select id="genre" label="Choose a genre">
          <option value="default">Select a genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>
        <button name="Fetch Button" value="fetch-button" 
        onClick={()=> setCurrentMovie(document.getElementById("genre").value)}>Fetch Movies!!
        </button>
        {/* TODO: fix bug where genre is not defined */}
        <MovieSelector genre={genre}/>
      </div>
    </>
  )
}

export default App
