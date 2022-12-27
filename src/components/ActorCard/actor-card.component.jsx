import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API'
import { SingleCardContent, SingleCardImg, SingleCardText, SingleCardTextStyled, SingleCardTitle, SingleCardWrapper } from '../../pages/Single/Single.styles'
import { StyledCardVote } from '../Card/card.styles'
import { Row } from '../Header/header.styles'

export const ActorCard = () => {
    const [actors, setActors] = useState([])
    const { id } = useParams()
    const getActor = async (actorId) => {
        const res = await apis.getActors(actorId)
        console.log(res.data);
        setActors(res.data)
    }

    useEffect(() => {
        getActor(id)
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
        </div>
    )
}
