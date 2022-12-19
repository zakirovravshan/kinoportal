import React from 'react'
import { baseImgURL } from '../../API/API'
import { StyledCard, StyledCardContent, StyledCardDate, StyledCardImg, StyledCardStar, StyledCardTitle, StyledCardVote } from './card.styles'
import stars from "../../assets/images/star.png"

export const Card = ({obj}) => {
  return (
    <StyledCard to={`/movie/${obj.id}`}>
      <StyledCardImg src={baseImgURL + obj.poster_path} alt={obj.title} />
      <StyledCardContent>
        <StyledCardTitle>{obj.title}</StyledCardTitle>
        <StyledCardDate>{obj.release_date}</StyledCardDate>
        <StyledCardStar src={stars} alt="rate star" width={15} height={15}/> 
       
        <StyledCardVote>{obj.vote_average}</StyledCardVote>

      </StyledCardContent>

    </StyledCard>
  )
}
