import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/Listing'

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" keywords={[`webdesign`, `web design`, `react`]} />
    <h1>Who tf am I?</h1>
    <p>
      I'm a professional JavaScript developer. I've worked with small businesses and large
      businesses. Everyone from a small paint brush manufacturer in Wyoming to WalMart. The ideas I
      express here are my own. So, if you get mad about javascript things, then get mad at me.
    </p>
    <p>If you need some assistance. I am available for part time, weekend, contract work.</p>
    <h2>Notes by me mostly for myself:</h2>
    <Listing />
  </Layout>
)

export default IndexPage
