// mock data
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

const MovieSelector = ({genre}) => {

    function filterMovies(genre) {
        return movies.filter(movie => movie.genre === genre);
    };

    function renderMovies(genre) {
        if (genre === 'default') {
            return
        }
        if (genre === 'select-a-genre') {
            return <div>
                <p>Error: no genre selected.</p>
                <p>Select a genre to display movies.</p>
            </div>
        } else {
            return (
                <div>
                    {/* capitalizes first letter of genre name */}
                    <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)} Movies</h2>
                    <ul>
                        {filterMovies(genre).map((movie) => 
                        <li key={movie.movieName}>{movie.movieName}</li>)}
                    </ul>
                </div>
            )
        }

    }

    return (
        <div>
            {renderMovies(genre)}
        </div>
    );

}

export default MovieSelector;