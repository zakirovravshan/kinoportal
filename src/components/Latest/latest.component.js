import React, { useEffect, useState } from 'react'
import { apis } from '../../API/API';
import { StyledPopularTitle } from '../../pages/Popular/popular.styles';
import { Card } from '../Card/card.components';
import { Row } from '../Header/header.styles';
import { Loader } from '../Loader/loader.component';

export const Latest = () => {

    const [movies, setMovie] = useState([])

    const getLatestMovies = async () => {
      const res = await apis.getLatestMovies();
      console.log(res);
      setMovie(res.data.results)
  
    }
    useEffect(() => {
      getLatestMovies()
  
    }, [])
  

  return (
    <div>
      <Row>
      <StyledPopularTitle>Top rated films...</StyledPopularTitle>
</Row>
{
        movies.length ? ( <Row>
          {
            movies.map((movie) => (
            
              <Card key={movie.title} obj={movie}/>
             ))
          }
        </Row>) : <Loader/>
      }
    </div>
  )
}
