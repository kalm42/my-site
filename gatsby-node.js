const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve('./src/templates/blogTemplate.js')

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
          edges {
            node {
              frontmatter {
                slug
                path
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.path) {
          createPage({
            path: node.frontmatter.path,
            component: BlogTemplate,
            context: {
              slug: node.frontmatter.slug,
            },
          })
        }
      })
      resolve()
    })
  })
}
