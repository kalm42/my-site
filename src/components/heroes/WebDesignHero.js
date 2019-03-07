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
  border-radius: 25px;
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
  border-radius: 25px;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query WEB_DESIGN_HERO_IMAGE_QUERY {
        file(relativePath: { regex: "/abstract/" }) {
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
          <TopText>Professionally designed, 100% original, completely custom website.</TopText>
          <BottomText>Or a customized WordPress template.</BottomText>
        </HeroWrapper>
      )
    }}
  />
)

export default Hero
