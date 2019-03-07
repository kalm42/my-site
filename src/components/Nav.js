import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Hamburger = styled.div`
  width: 16px;
  height: 12px;
  position: relative;
  margin: 16px;
  transform: rotate(0deg);
  transition .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #000;
    opacity: 1;
    right: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 5px;
    }
    &:nth-child(3) {
      top: 5px;
    }
    &:nth-child(4) {
      top: 10px;
      width: 40%;
    }
  }

  ${props =>
    props.open &&
    `
  span {
    &:nth-child(1) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
  }
  `}

`

const FullScreenNav = styled.nav`
  position: absolute;
  top: 80px;
  left: 0px;
  width: calc(100vw);
  height: calc(100vh - 80px);
  background: #000;
  z-index: 1;

  ul {
    padding: 60px;
  }

  li {
    list-style: none;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 100;
    font-size: 2em;
    position: relative;
    padding-bottom: calc(10vh);
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
  position: relative;
  color: #fff;
  text-decoration: none:

  &:after {
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.5s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`

class Nav extends Component {
  state = {
    open: false,
  }

  toggleOpen = () =>
    this.setState(state => ({
      open: !state.open,
    }))

  render() {
    const { open } = this.state

    return (
      <>
        <Hamburger onClick={this.toggleOpen} open={open}>
          <span />
          <span />
          <span />
          <span />
        </Hamburger>
        {open && (
          <FullScreenNav>
            <ul>
              <li>
                <Link href="/">
                  <StyledLink onClick={this.toggleOpen} to="/web-design">
                    Web Design
                  </StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <StyledLink onClick={this.toggleOpen} to="/hosting">
                    Hosting
                  </StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <StyledLink onClick={this.toggleOpen} to="/blog">
                    Blog
                  </StyledLink>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <StyledLink onClick={this.toggleOpen} to="/contact">
                    Contact
                  </StyledLink>
                </Link>
              </li>
            </ul>
          </FullScreenNav>
        )}
      </>
    )
  }
}

export default Nav
