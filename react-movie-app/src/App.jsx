import { useState, useEffect } from 'react';
import './App.css';
import MovieSelector from './MovieSelector';

function App() {

  // useState instantiation
  const [ currentGenre, setCurrentGenre ] = useState('default');
  const [ isLoading, setIsLoading ] = useState(false);

  // trigger functions when useState isLoading changes
  useEffect(() => {
      if (isLoading === true) {
        // triggers spinning cursor
        document.body.classList.add('is-loading');
      } else if (isLoading === false) {
        // cleanup function
        document.body.classList.remove('is-loading');
      }
    }, [isLoading]);

  const simulateFetch = () => {
    setIsLoading(true);
    // isLoading is true for half a second
    setTimeout(() => setIsLoading(false), 500);
  }

  return (
    <>
      <h1>Welcome to Movie Selector!</h1>
      <h2>Grab some popcorn, then select your favorite genre.</h2>

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
        onClick=
          {()=> {
            setCurrentGenre(document.querySelector('select').value);
            simulateFetch();
          }}
        >
          Fetch Movies!!
        </button>

        {/* creates prop named "genre", so that's what we pass into MovieSelector.jsx */}
        <MovieSelector genre={currentGenre} />
      </div>
    </>
  )
}

export default App;
