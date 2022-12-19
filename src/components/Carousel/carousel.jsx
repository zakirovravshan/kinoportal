import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { apis } from '../../API/API'
import { useEffect, useState } from 'react'
import { Card } from '../Card/card.components'
import { CardCarousel } from '../CarouselCard/carousel.card'
import { CarouselWrapper } from '../CarouselCard/carousel-card.styles'

export default function Carousel() {

    const sliderSettings = {
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500, 
    }

    const [movies, setMovie] = useState([])

    const getpopularMovies = async () => {
        const res = await apis.getPopularMovies();

        setMovie(res.data.results)

    }
    useEffect(() => {
        getpopularMovies()

    }, [])

    return (
        <CarouselWrapper  className='content'>
            
            <Slider {...sliderSettings}>
        {
                    movies.map((movie) => (

                        <CardCarousel key={movie.title} {...movie} />
                    ))
        }
        </Slider>
        </CarouselWrapper>
    )
}