import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/Listing'
import { ContentWrapper } from '../components/styles/shared'

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
