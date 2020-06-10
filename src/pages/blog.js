import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/Listing'

const blog = () => {
  return (
    <Layout>
      <SEO
        title="Blog Posts"
        keywords={[`javascript`, `server admin`, `react`, `gatsby`, `node`]}
      />
      <h1>Blog Posts</h1>
      <Listing />
    </Layout>
  )
}

export default blog
