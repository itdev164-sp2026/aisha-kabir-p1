import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/blooming-motherhood-logo.png"
import styled from "styled-components"


const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.header.backgroundColor};
`
const Left = styled.div`
  display: flex;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Title = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: #3b2f35;
  font-weight: 700;
`
const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #3b2f35;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

const Logo = styled.img`
  height: 70px;
  width: auto;
  display: block;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Left>
      <Title to="/">{siteTitle}</Title>
    </Left>

    <Right>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>

      <LogoLink to="/">
        <Logo src={logo} alt="Blooming Motherhood logo" />
      </LogoLink>
    </Right>
  </StyledHeader>
)

export default Header
