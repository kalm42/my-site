import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const H = styled.header`
  background: #fff41e;
  display: grid;
  grid-template-columns: 1fr 3vw;
  align-items: center;
  padding: 1vw 4vw;

  h1 {
    font-weight: 900;
  }
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
        <H>
          <Logo to="/">
            <h1>
              <Img fixed={image} /> kalm42
            </h1>
          </Logo>
        </H>
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
