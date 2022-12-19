import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apis } from '../../API/API';
import { SingleCard } from '../../components/SingleCard/single-card.component';

export const Single = () => {
  const [singleMovie , setSingleMovie] = useState()
  const { id } = useParams()

  const getMovie = async (movieId) => {
    const res = await apis.getSingleMovies(movieId)
   
    setSingleMovie(res.data);
    console.log(singleMovie);
    console.log(singleMovie);
   
   
    
    
  }

  useEffect(() => {
    getMovie(id)
  }, [id])


  return (
    <div>
      {
       singleMovie?(
        <SingleCard {...singleMovie}/>
      
       ): ""
      }
    </div>

  )
}
