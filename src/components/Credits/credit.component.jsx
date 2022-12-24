import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apis, baseImgURL } from '../../API/API'
import { SingleCardContent, SingleCardText } from '../../pages/Single/Single.styles'
import { Loader } from '../Loader/loader.component'
import { CreditsImg, CreditsItem, CreditsList, CreditsTitle, CreditsWrapper } from './credit.styles'





export const Credits = () => {
  const [credits, setCredits] = useState([])
  const { id } = useParams()
  const getCredits = async (movieId) => {
    const res = await apis.getCredits(movieId)
    setCredits(res.data.cast);
    console.log(res.data.cast);

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
              
                  <CreditsItem to="/">
                    <CreditsImg src={baseImgURL + item.profile_path} alt="" width={50} height={50} />
                    {/* <SingleCardText>{item.name}</SingleCardText> */}
                  </CreditsItem>
              
            
             ))
  
      }
     </CreditsList>
        ) : <Loader />
      }


    </div>

  )
}
