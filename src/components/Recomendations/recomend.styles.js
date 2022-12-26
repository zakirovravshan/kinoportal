import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const RecomendList = styled.div`
     width:100%;
     gap:30px;
    padding:10px 5px;
    margin: 0 auto;
    background-color: transparent;
    display:flex;
    overflow: hidden;



`;

export const RecomendItem = styled.div`
     width:500px;
     margin-right: 40px;

       
  
`;

export const RecomendTitle = styled.h2`
  color: #fff;
  margin: 0;
 

       
  
`;
export const RecomendWrapper = styled.div`
     display:flex;
     flex-direction: column;
     overflow:auto ;

       
  
`;

export const RecomendCard = styled(Link)`
/* padding:15px; */
background:transparent;
width:220px;
margin-bottom: 40px;
text-decoration:none;
border-radius: 18px;
height : 185px;
&:hover{
    /* box-shadow: rgb(0,0,0) 0px 0px 8px; */
}

`


export const RecomendCardImg = styled.img`
width: 330px;
border-radius: 18px;
margin-bottom:20px;
transition:all 0.3s ease;
&:hover{
    transform: scale(1.1);
}


`

export const RecomendCardTitle = styled.h2`
margin:0;
color:#fff;
font-size: 12px;

`


export const RecomendCardContent = styled.div`

`
export const RecomendCardDate = styled.div`
font-size: 12px;
text-decoration:none;
color: #fff;
`

export const RecomendCardStar = styled.img`
display:inline;
margin-left:10px;

`
export const RecomendCardVote = styled.div`
display:inline;
font-size: 12px;
text-decoration:none;
color: #fff;
margin-left:5px;
`


