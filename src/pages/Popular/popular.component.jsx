import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.components';
import { Row } from '../../components/Header/header.styles';
import { RowWrapper, StyledPopularTitle } from './popular.styles';

export const Popular = () => {

  const [movies, setMovie] = useState([])

  const getpopularMovies = async () => {
    const res = await apis.getPopularMovies();
   
    setMovie(res.data.results)

  }
  useEffect(() => {
    getpopularMovies()

  }, [])


  return (
    <>
  <Row>
  <StyledPopularTitle>Popular films...</StyledPopularTitle>
  </Row>
 
      {
        movies.length ? ( <Row>
          {
            movies.map((movie) => (
            
              <Card key={movie.title} obj={movie}/>
             ))
          }

        </Row>) : ""
      }


    </>
  )
}
