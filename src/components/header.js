import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderWrapper = styled.div``

const HeaderContainer = styled.div``

const Logo = styled(Link)``

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
            <h1
              style={{
                margin: 0,
                fontWeight: 100,
                fontSize: 'var(--font-size-4)',
                lineHeight: 'var(--line-height-4)',
              }}>
              <Logo to="/">
                <Img fixed={image} /> kalm42
              </Logo>
            </h1>
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
