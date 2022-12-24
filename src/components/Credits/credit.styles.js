import { Link } from "react-router-dom";
import styled from "styled-components";

export const CreditsTitle = styled.div`
margin-left:30px;
color: #fff;
font-size: 24px;
font-weight: 700;
margin-bottom: 20px;
`;


export const CreditsImg = styled.img`
display: block;
width: 70px;
height: 70px;
border-radius : 50%;
transition: all 0.3s ease;
&:hover{
    transform: scale(1.2);
}
    
`;
export const CreditsList = styled.ul`
gap : 30px;
list-style-type: none;
display:flex;

flex-wrap: wrap;
    
`;
export const CreditsItem = styled(Link)`


`