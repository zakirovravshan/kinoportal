import React, { useEffect } from 'react'
import { baseImgURL } from '../../API/API'
import { SingleCardContent, SingleCardImg, SingleCardQuote, SingleCardText, SingleCardTextStyled, SingleCardTitle, SingleCardWrapper, SingleVideo } from '../../pages/Single/Single.styles'
import { StyledCardStar, StyledCardVote } from '../Card/card.styles'
import { Row } from '../Header/header.styles'
import stars from "../../assets/images/star.png"
import { Credits } from '../Credits/credit.component'
import { Trailer } from '../Trailer/trailer.component'
import { Recomend } from '../Recomendations/recomend.component'

export const SingleCard = ({ title, poster_path, budget, vote_average, tagline, production_countries, release_date, overview, genres, production_companies
}) => {



  return (
    <Row>
      <SingleCardWrapper>
        <SingleCardImg src={baseImgURL + poster_path} alt={title} width={350} />

        <SingleCardContent>
          <SingleCardTitle>{title}</SingleCardTitle>
          <SingleCardQuote>{`- «${tagline}»`}</SingleCardQuote>
          <StyledCardStar src={stars} alt="rate star" width={15} height={15} />
          <StyledCardVote><SingleCardTextStyled>{vote_average}</SingleCardTextStyled></StyledCardVote>
          <SingleCardText>Genre : <SingleCardTextStyled>{genres[0]?.name} ,{genres[1]?.name}</SingleCardTextStyled> </SingleCardText>
          <SingleCardText>Country : <SingleCardTextStyled>{production_countries[0].name}</SingleCardTextStyled> </SingleCardText>
          <SingleCardText>Production Company :<SingleCardTextStyled><StyledCardStar src={baseImgURL + production_companies[0].logo_path} alt="company logo" width={80} height={80} /> </SingleCardTextStyled></SingleCardText>
          <SingleCardText>Release date : <SingleCardTextStyled>{release_date}</SingleCardTextStyled> </SingleCardText>
          <SingleCardText>Budget : <SingleCardTextStyled>{budget}$</SingleCardTextStyled> </SingleCardText>
          <SingleCardText>{overview}</SingleCardText>
        </SingleCardContent>


      </SingleCardWrapper>
      <SingleCardWrapper>
        <Trailer/>
        <Credits/>
      </SingleCardWrapper>
      
        <Recomend/>
      

    </Row>
  )
}