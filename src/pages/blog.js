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
        {edges.map(({ node }) => (
          <BlogPost key={node.id} {...node.frontmatter} />
        ))}
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
            frontmatter: PropTypes.shape({
              category: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            category
            title
            description
            path
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
