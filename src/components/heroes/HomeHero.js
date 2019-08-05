import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { Theme } from '../styles/shared'

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled(Img)`
  max-height: calc(90vh - 80px);
`

const TopText = styled.p`
  position: absolute;
  top: 50px;
  right: calc(5vw);
  color: ${Theme.yellow};
  font-size: 1.45rem;
  font-weight: 100;
  line-height: 1.4;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
`
const BottomText = styled.p`
  position: absolute;
  top: 200px;
  left: calc(5vw);
  color: ${Theme.yellow};
  font-size: 1.45rem;
  font-weight: 100;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HOME_HERO_IMAGE_QUERY {
        file(relativePath: { regex: "/rawpixel/" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.file.childImageSharp.fluid
      return (
        <HeroWrapper>
          <Image fluid={image} />
          <TopText>
            kalm42 - Kyle Alexander Lafayette Melton - The answer to life, the universe, and
            everything.
          </TopText>
          <BottomText>At least when it comes to your website. Anything else is all you.</BottomText>
        </HeroWrapper>
      )
    }}
  />
)

export default Hero
