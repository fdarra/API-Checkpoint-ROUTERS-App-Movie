import { moviesData } from "./MoviesData";
import AddMovie from "./components/addmovie/AddMovie";
import MoviesListe from "./components/moviesliste/MoviesListe";
import { useState } from "react";
import "./App.css";
import FilterByTitle from "./components/filterByTitle/FilterByTitle";
import FilterByRate from "./components/filterByRate/Rating.jsx";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchInput, setSearchInput] = useState('');
  const[RateInput,setrateInput] = useState(1);



  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    console.log("new movie added", newMovie);
    console.log(movies);
  };


  return (
    <div className="App">
      <div
        style={{
          display: "flex "}}
      >
        <div style={{transform: 'translatey(+35%)'}}>
        <AddMovie add={addMovie} />
      </div>
        
        <div className="fieldset">
          <h3 className="legend">Filter</h3>
          <div style={{transform: 'translatey(-40%)', display:'flex', justifyContent:'space-around'}}>
          <FilterByTitle 
          searchInput={searchInput}
          setSearchInput={setSearchInput}/>

          <FilterByRate RateInput={RateInput} setrateInput={setrateInput} isRating={true} />
           
          </div>
        </div>
      </div>
      <MoviesListe movies={movies} searchInput={searchInput} RateInput={RateInput}  />
    </div>
  );
}

export default App;
