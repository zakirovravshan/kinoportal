import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis } from '../../API/API'
import { ActorCard } from '../../components/ActorCard/actor-card.component'

export const Actor = () => {
    const [actors , setActors] = useState([])
    const {id} = useParams()
    const getActor = async (movieId) =>{
        const res = await apis.getCredits(movieId)
        console.log(res.data.cast);
        setActors(res.data.cast)
    }

    useEffect(() => {
        getActor(id)
    } ,[id])
  return (
    <div>
        {
            actors.length ? (
                actors.map(actor => {
                    <ActorCard obj={actor}/>
                    
                })
            ) : ""
        }
    </div>
  )
}
