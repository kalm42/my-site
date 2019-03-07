import React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'
import SEO from './seo'
import { ContentWrapper } from './styles/shared'

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
        <h1>{title}</h1>
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
