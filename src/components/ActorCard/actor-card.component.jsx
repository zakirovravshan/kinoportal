import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis } from '../../API/API'

export const ActorCard = () => {
    const [actors , setActors] = useState([])
    const {id} = useParams()
    const getActor = async (actorId) => {
        const res = await apis.getActors(actorId)
        console.log(res.data.cast);
        setActors(res.data.cast)
    }

    useEffect(() => {
        getActor(id)
    } ,[id])
  return (
    <div>
        <h1> VTHNGRBTEVWC</h1>
       {/* {
            actors ? (
                actors.map(actor => {
                    <div>
                        {
                            console.log(actor)
                        }
                        
                    </div>
                    
                })
            ) : ""
        } */}
    </div>
  )
}
