import React from "react";
import {useState, useEffect} from "react";
import './App.css';
import img from "./images/search.png";
import MovieCard from "./MovieCard";
import Footer from "./Footer";;
// 915d9edd

const API_URL = 'http://www.omdbapi.com?apikey=915d9edd';



const App = () => {


        const [movies, setMovies] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');

        const searchMovies = async (title) => {
          const response = await fetch(`${API_URL}&s=${title}`);
          const data = await response.json();
          
          setMovies(data.Search);

        }
        useEffect(() =>{
      searchMovies('Spiderman');
        }, []);


  return (
    <div className="app">
    <h1>MovieLand</h1>
    <h5>Search For Your Faviorate Movie</h5>
     <div className="search">
     <input type="text" placeholder="search for movies" 
     value={searchTerm}
     onChange={(e)=> setSearchTerm(e.target.value)}/>
     <img src={img} alt="search"
     onClick={()=> searchMovies(searchTerm)} />
    
     </div>
    
     {
      movies?.length>0 
      ?(
        <div className="container">
        {movies.map((movie)=>
        (
          <MovieCard movie = {movie}/>
        ))}
        
      </div>
      )
       :(
        <div className="empty">
        <h2>No Movies Found</h2>
        </div>
       )
     }

<div>
<Footer></Footer>
</div>
    
    </div>
  );
}

export default App;
