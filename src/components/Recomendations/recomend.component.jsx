import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API'
import { Card } from '../Card/card.components'
import { CreditsItem, CreditsList } from '../Credits/credit.styles'
import { Row } from '../Header/header.styles'
import { Loader } from '../Loader/loader.component'
import stars from "../../assets/images/star.png"
import { Item, RecomendCard, RecomendCardContent, RecomendCardDate, RecomendCardImg, RecomendCardStar, RecomendCardTitle, RecomendCardVote, RecomendItem, RecomendList, RecomendTitle, RecomendWrapper } from './recomend.styles'
import { SingleCardWrapper } from '../../pages/Single/Single.styles'

export const Recomend = () => {
    const [movies, setMovie] = useState([])
    const { id } = useParams()
    const getRecomend = async (movieId) => {
        const res = await apis.getRecomend(movieId)
        console.log(res.data.results);
        setMovie(res.data.results);
    }
    useEffect(() => {
        getRecomend(id)
    }, [id])

    return (
        
        <SingleCardWrapper>
            

            {
                movies.length ? (
                    <RecomendWrapper>
                        <RecomendTitle>
                        Похожие :
                        </RecomendTitle>
                    
                   <RecomendList>
                    
                    {
                          movies.splice(0,9).map((movie) => (
                            <RecomendCard to={`/movie/${movie.id}`}>
                                <RecomendCardImg src={baseImgURL + movie.poster_path} alt={movie.title} width={200} />
                                <RecomendCardContent>
                                    <RecomendCardTitle>{movie.title}</RecomendCardTitle>
                                    <RecomendCardDate>{movie.release_date}</RecomendCardDate>
                                    <RecomendCardStar src={stars} alt="rate star" width={15} height={15} />

                                    <RecomendCardVote>{movie.vote_average}</RecomendCardVote>

                                </RecomendCardContent>

                            </RecomendCard>



                        ))
                    }
                   </RecomendList>
                   </RecomendWrapper>


                ) : <Loader />
            }
        </SingleCardWrapper>
    )
}
