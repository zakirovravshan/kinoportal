import { Link } from "react-router-dom";
import styled from "styled-components";



export const StyledCard = styled(Link)`
/* padding:15px; */
background:transparent;
width:220px;
margin-bottom: 40px;
text-decoration:none;
border-radius: 18px;
&:hover{
    /* box-shadow: rgb(0,0,0) 0px 0px 8px; */
}

`


export const StyledCardImg = styled.img`
border-radius: 18px;
margin-bottom:20px;
transition:all 0.3s ease;
&:hover{
    transform: scale(1.1);
}


`

export const StyledCardTitle = styled.h2`
margin:0;
color:#fff;

`


export const StyledCardContent = styled.div`

`
export const StyledCardDate = styled.div`

text-decoration:none;
color: #fff;
`

export const StyledCardStar = styled.img`
display:inline;
margin-left:10px;

`
export const StyledCardVote = styled.div`
display:inline;
text-decoration:none;
color: #fff;
margin-left:5px;
`