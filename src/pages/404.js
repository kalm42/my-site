import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
const Main = styled.main`
  min-height: 41vh;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Main>
  </Layout>
)

export default NotFoundPage
