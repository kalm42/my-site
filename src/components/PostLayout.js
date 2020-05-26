import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from './layout'
import SEO from './seo'

const ContentWrapper = styled.main`
  max-width: 700px;
  margin: 1.45em auto;
  @media screen and (max-width: 900px) {
    padding: 0 calc(5vw);
  }
`

const PostLayout = props => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
      excerpt,
      timeToRead,
    },
  } = props.data
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <ContentWrapper>
        <aside>
          <p>
            Time to read: {timeToRead} {timeToRead > 1 ? `minutes` : `minute`}
          </p>
        </aside>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentWrapper>
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query POST_DETAIL_QUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
      }
      excerpt
      timeToRead
      html
    }
  }
`
