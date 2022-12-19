import React, { useEffect, useState } from 'react'
import { apis } from '../../API/API';
import { Card } from '../../components/Card/card.components';
import Carousel from '../../components/Carousel/carousel';
import { Row } from '../../components/Header/header.styles';
import { StyledPopularTitle } from '../../pages/Popular/popular.styles';



export const Home = () => {

    const [movies, setMovie] = useState([])

    const getLatestMovies = async () => {
      const res = await apis.getLatestMovies();
      setMovie(res.data.results)
  
    }
    useEffect(() => {
      getLatestMovies()
  
    }, [])
  

  return (
    <div>
      <Carousel/>
      <Row>
      <StyledPopularTitle>All Films </StyledPopularTitle>
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
    </div>
  )
}
