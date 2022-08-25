import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard';
//2df4c83b

const API_URL = "http://www.omdbapi.com?apikey=2df4c83b";

const movie1 = {
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
    }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    const movieSearch = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        movieSearch('Spiderman');
    },[]);

    
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search"> <input placeholder="Search For movies" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
            <img src="" alt="serach" onClick={() => movieSearch(searchTerm)}/>
            </div>
                    {
                movies?.length > 0 
                ? (
                    <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                 ))};
                </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                        </div>
                )
            }
            

            </div>
        
 
        
    );
}
export default App