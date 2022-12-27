import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API'
import { SingleCardContent, SingleCardImg, SingleCardText, SingleCardTextStyled, SingleCardTitle, SingleCardWrapper } from '../../pages/Single/Single.styles'
import { StyledCardVote } from '../Card/card.styles'
import { Row } from '../Header/header.styles'
import { Loader } from '../Loader/loader.component'
import stars from "../../assets/images/star.png"
import { RecomendCard, RecomendCardContent, RecomendCardDate, RecomendCardImg, RecomendCardStar, RecomendCardTitle, RecomendCardVote, RecomendList, RecomendTitle, RecomendWrapper } from '../Recomendations/recomend.styles'

export const ActorCard = () => {
    const [actors, setActors] = useState([])
    const [actorsMovie, setActorsMovie] = useState([])
    const { id } = useParams()
    const getActor = async (actorId) => {
        const res = await apis.getActors(actorId)
        setActors(res.data)
    }

    const getActorMovie = async (actorId) => {
        const res = await apis.getActorsMovie(actorId)
        console.log(res.data.cast);
        setActorsMovie(res.data.cast)
    }

    useEffect(() => {
        getActor(id)
    }, [id])
    useEffect(() => {
        getActorMovie(id)
    }, [id])


    return (
        <div>
            <h1>


            </h1>
            {
                actors ? (

                    <Row>
                        <SingleCardWrapper>
                        <SingleCardImg src={baseImgURL + actors.profile_path} alt={actors.name} width={350} />

                        <SingleCardContent>
                            <SingleCardTitle>{actors.name}</SingleCardTitle>
                            <SingleCardText>Date of birth :<SingleCardTextStyled> {actors.birthday}</SingleCardTextStyled></SingleCardText>
                            <SingleCardText>Place of birth : <SingleCardTextStyled>{actors.place_of_birth
                            }</SingleCardTextStyled> </SingleCardText>
                            <SingleCardText>Department : <SingleCardTextStyled>{ actors.known_for_department
                            }</SingleCardTextStyled> </SingleCardText>
                            <SingleCardText>{actors.biography}</SingleCardText>
                        </SingleCardContent>
                        </SingleCardWrapper>
                    </Row>
                ) : ""
            }
            
            

            {
                actorsMovie.length ? (
                    <Row>
                    <SingleCardWrapper>
                    <RecomendWrapper>
                        <RecomendTitle>
                        Похожие :
                        </RecomendTitle>
                    
                   <RecomendList>
                    
                    {
                          actorsMovie.splice(0,9).map((actorMovie) => (
                            <RecomendCard to={`/person/${actorMovie.id}`}>
                                <RecomendCardImg src={baseImgURL + actorMovie.poster_path} alt={actorMovie.title} width={200} />
                                <RecomendCardContent>
                                    <RecomendCardTitle>{actorMovie.title}</RecomendCardTitle>
                                    <RecomendCardDate>{actorMovie.release_date}</RecomendCardDate>
                                    <RecomendCardStar src={stars} alt="rate star" width={15} height={15} />

                                    <RecomendCardVote>{actorMovie.vote_average}</RecomendCardVote>

                                </RecomendCardContent>

                            </RecomendCard>



                        ))
                    }
                   </RecomendList>
                   </RecomendWrapper>
                   </SingleCardWrapper>
                   </Row>


                ) : <Loader />
            }
        
    
        </div>
    )
}
