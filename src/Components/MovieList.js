import React from 'react'
import Movie from './Movie'
import UpDate from './UpDate'

function MovieList({data}) {
  return (
    <div>
        {data.map((el)=> <Movie key={el.id} movie={el}/>)}
    </div>
  )
}

export default MovieList