import { useState } from "react";

const MovieSelector = (genre) => {

    // test data
    const movies = [
        {
            movieName: "Fast and Furious",
            genre: "Action"
        },
        {
            movieName: "Mission: Impossible",
            genre: "Action"
        },
        {
            movieName: "Step Brothers",
            genre: "Comedy"
        },
        {
            movieName: "Horrible Bosses",
            genre: "Comedy"
        },
        {
            movieName: "Shawshank Redemption",
            genre: "Horror"
        },
        {
            movieName: "Oddity",
            genre: "Horror"
        }
    ]

    const [ currentMovie, setCurrentMovie ] = useState('');

    const filterMovies = (genre) => {
        return movies.filter((movie) => movie.genre === genre);
    }

    return (
        <div>
            <h2>{genre}</h2>
            <p>{filterMovies}</p>
        </div>
    );

}

export default MovieSelector;