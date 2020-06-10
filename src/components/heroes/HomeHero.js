import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HeroWrapper = styled.div``
const Image = styled(Img)``
const TopText = styled.p``
const BottomText = styled.p``

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
