/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const _ = require('lodash')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post-template.js`)
  const blogListTemplate = path.resolve('src/templates/filtered-posts.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
      const posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            layout: 'blog',
            slug: node.fields.slug,
          },
        })
      })

      return result
    })
    .then(result => {
      const posts = result.data.allMarkdownRemark.edges

      // Tag pages:
      let categories = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.category')) {
          categories = categories.concat(edge.node.frontmatter.category)
        }
      })
      // Eliminate duplicate tags
      categories = _.uniq(categories)

      // Make tag pages
      categories.forEach(category => {
        createPage({
          path: `/blog/${_.kebabCase(category)}/`,
          component: blogListTemplate,
          context: {
            category,
            layout: 'blog',
          },
        })
      })

      return result
    })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.includes('blog')) {
    createPage({
      ...page,
      context: {
        layout: 'blog',
        category: '',
      },
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // Creates a new path by removing the directory name in which the md file is
    // located
    // /electronics/LED-sweater/LED-sweater => /electronics/LED-sweater
    // /cooking/apple-tart/apple-tart => /cooking/apple-tart
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/blog`,
      trailingSlash: false,
    })
    const dirname = path.dirname(slug)
    const filename = path.basename(slug)
    const parts = dirname.split(path.sep)
    parts.pop()
    const newSlug = path.join('/blog/', ...parts, filename)

    createNodeField({
      node,
      name: `slug`,
      value: newSlug,
    })
  }
}
