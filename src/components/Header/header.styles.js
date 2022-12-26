import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import searchicon from "../../assets/images/search.png"

export const Row = styled.div`
    width:100%;
    max-width:1280px;
    padding:0 20px;
    margin: 0 auto;
    background-color: transparent ;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    

`

export const StyledHeader = styled.header`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 0;
    margin-bottom:10px;
    
`

export const StyleNav = styled.nav`
    display:flex;
    align-items:center;
`
export const StyledNavList = styled.ul`
    display:flex;
    align-items:center;
    justify-content: space-between;
    list-style-type: none;
    padding:0;
    margin:0 ;
    width: 600px;
`

export const StyledNavItem = styled.li`
    
`

export const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    font-size:24px;
    color:#fff;

    
`




export const StyledSearch = styled.input`
    width:250px;
    padding:15px 10px 0px 5px;
    background-color:transparent;
    outline:none;
    border: 1px solid transparent;
    border-bottom:3px solid #0dbbeb;
    color:#fff;
    transition:all , ease , 0.3s;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    
    &::placeholder{
        position:relative;
        color:#fff;
        font-size: 24px;
        font-family: 'Nunito Sans', sans-serif;
    }
    &:focus{
        padding-bottom:10px;
    }

    

`
