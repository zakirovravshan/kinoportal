import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis } from '../../API/API'
import { SingleVideo } from '../../pages/Single/Single.styles'
import { Loader } from '../Loader/loader.component'

export const Trailer = () => {
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    const getVideo = async (movieId) => {
        const res = await apis.getVideo(movieId)
        setVideos(res.data.results)
        
    }

    useEffect(() => {
        getVideo(id)

    }, [id])

    return (
        <div>
            {
                videos.length ? (
                    <SingleVideo width="560" height="315" src={`https://www.youtube.com/embed/${videos[0].key}`} title="YouTube video player " allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></SingleVideo>
                ) : <Loader />
            }
              
        </div>
    )
}

