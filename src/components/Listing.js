import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { LinkButton } from '../shared/styledComponents'

const LISTING_QUERY = graphql`
  query LISTING_QUERY {
    allMarkdownRemark(limit: 10, filter: {
      fileAbsolutePath: {
        regex: "/blog/*.*\\.md$/"
      }
    }, sort: {
      order: DESC
      fields: [frontmatter___date, frontmatter___title]
    }) {
      edges {
        node {
          frontmatter {
            title
            slug
            path
            date(formatString: "MMMM DD, YYYY")
            featured_image
          }
          excerpt
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: var(--shallowboxshadow);
  padding: 1rem;
  border-radius: var(--borderradius);
  margin-bottom: 1rem;
  background: var(--lightaccent-lighter);
  a {
    text-decoration: none;
    color: var(--darkshade);
    &:hover {
      text-decoration: underline;
    }
  }
`

const Listing = () => {
  return (
    <StaticQuery
      query={LISTING_QUERY}
      render={data => {
        return data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            {node.frontmatter.featured_image && <img src={node.frontmatter.featured_image} />}
            <h3>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h3>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <LinkButton to={node.frontmatter.path}>Read More</LinkButton>
          </Post>
        ))
      }}
    />
  )
}

export default Listing
