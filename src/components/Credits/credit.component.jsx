import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API'
import { Actor } from '../../pages/Actor/actor.component'
import { SingleCardContent, SingleCardText } from '../../pages/Single/Single.styles'
import { Loader } from '../Loader/loader.component'
import { CreditsImg, CreditsItem, CreditsList, CreditsTitle, CreditsWrapper } from './credit.styles'





export const Credits = () => {
  const [credits, setCredits] = useState([])
  const { id } = useParams()
  const getCredits = async (movieId) => {
    const res = await apis.getCredits(movieId)
    setCredits(res.data.cast);
    

  }
  useEffect(() => {

    getCredits(id)


  }, [id])
  return (

    <div>
      <CreditsTitle  > В ролях :</CreditsTitle>
      {
        credits.length ? (
          <CreditsList>
      {
             credits.splice(0,9).map((item) => (
              <div>
                  <CreditsItem to={`/person/${item.id}`}>
                    
                    <CreditsImg src={baseImgURL + item.profile_path} alt="" width={50} height={50} />
              
                  </CreditsItem>
              </div>
            
             ))
  
      }
     </CreditsList>
        ) : <Loader />
      }


    </div>

  )
}
