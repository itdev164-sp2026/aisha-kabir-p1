import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/blooming-motherhood-logo.png"
import styled from "styled-components"


const StyledHeader =styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Title = styled(Link)`
  font-size: var(--font-lg);
  text-decoration: none;
  color: ${props => props.theme.header.color};
  font-weight: bold;
`
const Logo = styled.img`
  height: 50px;
  width: auto;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Title to="/">
      {siteTitle}
    </Title>

    <Logo src={logo} alt="Blooming Motherhood logo" />
  </StyledHeader>
)

export default Header
