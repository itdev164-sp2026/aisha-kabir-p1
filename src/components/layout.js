import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import "./layout.css"
import { Gray } from "./themes/Gray"

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`

const Footer = styled.footer`
  margin-top: var(--space-5);
  font-size: var(--font-sm);
  text-align: center;
  color: var(--color-text);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main>
        <Footer>
          <p>© {new Date().getFullYear()} Blooming Motherhood</p>
          <p>Created by Aisha Kabir</p>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

export default Layout
