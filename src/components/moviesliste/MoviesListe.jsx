import React from 'react'
import MovieCard from '../movieCard/MovieCard'


const MoviesListe = ({movies,searchInput,RateInput}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
      
        {

        
      movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase())
    && movie.rate >= RateInput
    )
        
    .map((movie, key) =>  <MovieCard movie={movie}  key = {movie.id} /> )
        }





    </div>
    

  )
}

export default MoviesListe