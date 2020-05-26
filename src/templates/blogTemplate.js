import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContentWrapper = styled.main`
  max-width: 700px;
  margin: 1.45em auto;
  @media screen and (max-width: 900px) {
    padding: 0 calc(5vw);
  }
`

const BlogLayout = props => {
  const {
    markdownRemark: {
      frontmatter: { title, featured_image: featuredImage },
      html,
      excerpt,
      timeToRead,
    },
  } = props.data
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <ContentWrapper>
        {featuredImage && <img style={{ width: '100%' }} src={featuredImage} alt={title} />}
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

export default BlogLayout

export const query = graphql`
  query BLOG_DETAIL_QUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        featured_image
      }
      excerpt
      timeToRead
      html
    }
  }
`
