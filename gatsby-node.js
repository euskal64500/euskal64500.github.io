/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post-template.js`)
  const blogListTemplate = path.resolve("src/templates/filtered-posts.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          layout: 'posts',
        },
      })
    })

    // Tag pages:
    let categories = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.category")) {
        categories = categories.concat(edge.node.frontmatter.category)
      }
    })
    // Eliminate duplicate tags
    categories = _.uniq(categories)

    // Make tag pages
    categories.forEach(category => {
      createPage({
        path: `/posts/${_.kebabCase(category)}/`,
        component: blogListTemplate,
        context: {
          category,
          layout: 'posts',
        },
      })
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if( page.path.includes("posts") ) {
    createPage({
      ...page,
      context: {
        layout: 'posts',
      },
    })
  }
}
