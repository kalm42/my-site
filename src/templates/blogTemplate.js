import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContentWrapper } from '../components/styles/shared'

const BlogLayout = props => {
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

export default BlogLayout

export const query = graphql`
  query BLOG_DETAIL_QUERY($slug: String!) {
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
