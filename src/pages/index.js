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

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" keywords={[`webdesign`, `web design`, `react`]} />
    <ContentWrapper>
      <h1>Who am I?</h1>
      <p>
        I am a professional JavaScript developer. This is where I write notes for myself, hopefully they will help you
        also.
      </p>
      <h2>Notes to self</h2>
      <Listing />
    </ContentWrapper>
  </Layout>
)

export default IndexPage
