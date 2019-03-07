import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Listing from '../components/Listing'
import Hero from '../components/heroes/WebDesignHero'
import { ContentWrapper } from '../components/styles/shared'

const WebDesign = () => (
  <Layout>
    <SEO title="Website Design" keywords={[`webdesign`, `web design`, `react`]} />
    <Hero />
    <ContentWrapper>
      <h1>Professionaly Designed</h1>
      <p>
        I am a professional web developer located in Idaho Falls. I make one of a kind websites,
        progressive web aps that match your business or personal needs. Every year more and more
        business is done straight from a mobile phone. The easier it is for your customer to work
        with you the more likely you are to retain that customer and that’s what everyone wants.
      </p>
      <p>
        For details on each of these services go to the Web Design page. I go over each of these in
        detail. Alternatively contact me via email or phone. I’ll be happy to discuss your website
        and go over what you need.
      </p>
      <p>
        As your local web developer with years of experience in website development, search engine
        optimization (seo), local directory listing, and social media optimization (smo), Google
        AdWords campaign management, and call tracking I can help you win over the internet.
      </p>
      <h2>From the Blog</h2>
      <Listing />
    </ContentWrapper>
  </Layout>
)

export default WebDesign
