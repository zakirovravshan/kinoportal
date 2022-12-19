import React from 'react'
import { baseImgURL } from '../../API/API'
import { StyledCard, StyledCardImg } from '../Card/card.styles'
import { Row } from '../Header/header.styles'
import { CarouselWrapper, StyledCarouselImg,  } from './carousel-card.styles'

export const CardCarousel = ({backdrop_path , title , id}) => {
    return (
        <Row>
            <CarouselWrapper to={`/movie/${id}`}>
                <StyledCarouselImg src={baseImgURL + backdrop_path} alt={title} />
               
            </CarouselWrapper>
        </Row>






    )
}
