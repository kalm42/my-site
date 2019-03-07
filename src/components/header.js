import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
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
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0, fontWeight: 100 }}>
        <Logo to="/">{siteTitle}</Logo>
      </h1>
      <Nav />
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
