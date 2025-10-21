import { useState } from "react";

const MovieSelector = (currentGenre) => {

    // test data
    const movies = [
        {
            movieName: "Fast and Furious",
            genre: "action"
        },
        {
            movieName: "Mission: Impossible",
            genre: "action"
        },
        {
            movieName: "Step Brothers",
            genre: "comedy"
        },
        {
            movieName: "Horrible Bosses",
            genre: "comedy"
        },
        {
            movieName: "Shawshank Redemption",
            genre: "horror"
        },
        {
            movieName: "Oddity",
            genre: "horror"
        }
    ];

    const filterMovies = (currentGenre) => {
        return movies.filter((movie) => movie.genre === currentGenre);
    };

    function renderMovies(currentGenre) {
        // TODO: debug filterMovies logging empty object
        console.log(currentGenre);
        console.log(filterMovies(currentGenre));

        // TODO: debug conditionals not activating - maybe useState is to blame?
        if (currentGenre === 'default') {
            return <p>Please select a genre to display movies.</p>;
        } else {
            return (
                <div>
                    <h2>Movies</h2>
                    <ul>
                        {filterMovies(currentGenre).map((movie) => 
                        <li key={movie.movieName}>{movie.movieName}</li>)}
                    </ul>
                </div>
            )
        }

    }

    return (
        <div>
            {renderMovies(currentGenre)}
        </div>
    );

}

export default MovieSelector;