import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/Listing'

const ContentWrapper = styled.main`
  max-width: 700px;
  margin: 1.45em auto;
  @media screen and (max-width: 900px) {
    padding: 0 calc(5vw);
  }
`

const blog = () => {
  return (
    <Layout>
      <ContentWrapper>
        <SEO title="Blog Posts" keywords={[`javascript`, `server admin`, `react`, `gatsby`, `node`]} />
        <h1>Blog Posts</h1>
        <Listing />
      </ContentWrapper>
    </Layout>
  )
}

export default blog
