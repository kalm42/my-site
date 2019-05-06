import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Nav from './Nav'

const HeaderWrapper = styled.div`
  background: #fff41e;
  position: sticky;
  top: 0;
  z-index: 1;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr 80px;
`

const Logo = styled(Link)`
  color: #000000;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HEADER_LOGO_IMAGE_QUERY {
        file(relativePath: { regex: "/kalm-icon/" }) {
          childImageSharp {
            fixed(height: 36) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.file.childImageSharp.fixed
      return (
        <HeaderWrapper>
          <HeaderContainer>
            <h1 style={{ margin: 0, fontWeight: 100 }}>
              <Logo to="/">
                <Img fixed={image} /> kalm42
              </Logo>
            </h1>
            <Nav />
          </HeaderContainer>
        </HeaderWrapper>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
