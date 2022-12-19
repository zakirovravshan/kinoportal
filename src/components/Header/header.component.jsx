import React from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from "../../assets/images/movie.png"
import { Row, StyledHeader, StyledNavItem, StyledNavLink, StyledNavList, StyledSearch } from './header.styles'
export const Header = () => {
  
  return (
    <Row>
      <StyledHeader>
      <Link to="/"><img src={logo} alt="movie logo" width={90} height={60} /></Link>
      <nav>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink  to="/"> Home</StyledNavLink>
          </StyledNavItem><StyledNavItem>
            <StyledNavLink  to="/popular"> Popular</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
            to="/topfilms"> Top Films</StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </nav>
      <StyledSearch placeholder='Search movie...      🔍' />
    </StyledHeader>
    
    </Row>
    
  )
}
