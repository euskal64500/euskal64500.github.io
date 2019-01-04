import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogPost from '../components/blog-post'

const BlogPage = ({ data }) => {
  const { edges } = data.blogs
  return (
    <div>
      <SEO title="Blog" />
      <div>
        {edges.map(({ node }) => {
          const {
            fields: { slug },
          } = node
          const blogHeader = { slug, ...node.frontmatter }
          return <BlogPost key={node.id} {...blogHeader} />
        })}
      </div>
    </div>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    blogs: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              category: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              cover: PropTypes.object.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

BlogPage.defaultProps = {
  data: {},
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            category
            title
            description
            cover {
              childImageSharp {
                sizes(maxWidth: 200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
