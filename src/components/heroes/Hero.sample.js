import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Theme } from '../styles/shared'

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled(Img)`
  max-height: calc(90vh - 80px);
`

const Text = styled.p`
  position: absolute;
  top: 50px;
  right: calc(5vw);
  color: ${Theme.yellow};
  font-size: 1.45rem;
  font-weight: 300;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query PAGE_NAME_HERO_IMAGE_QUERY {
        file(relativePath: { regex: "/unsplash/" }) {
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
          <Text>Some Text Goes Here</Text>
        </HeroWrapper>
      )
    }}
  />
)

export default Hero
