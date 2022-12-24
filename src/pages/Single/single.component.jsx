import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apis, baseImgURL } from '../../API/API';
import { Credits } from '../../components/Credits/credit.component';
import { Loader } from '../../components/Loader/loader.component';
import { SingleCard } from '../../components/SingleCard/single-card.component';
import { SingleVideo } from './Single.styles';

export const Single = () => {
  const [singleMovie, setSingleMovie] = useState()
  

  const { id } = useParams()

  const getMovie = async (movieId) => {
    const res = await apis.getSingleMovies(movieId)

    setSingleMovie(res.data);
  }
  useEffect(() => {
    getMovie(id)
  }, [id])


 


  return (
    <div>
      {
        singleMovie ? (
          <SingleCard {...singleMovie} />

        ) : <Loader />

      }  

    </div>

  )
}
