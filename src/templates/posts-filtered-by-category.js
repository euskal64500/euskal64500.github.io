import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogPost from '../components/blog-post'

const FilteredByCategoryPosts = ({ data }) => {
  const { edges } = data.postsByCategory
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

FilteredByCategoryPosts.propTypes = {
  data: PropTypes.shape({
    postsByCategory: PropTypes.shape({
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
              tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

FilteredByCategoryPosts.defaultProps = {
  data: {},
}

export default FilteredByCategoryPosts

export const pageQuery = graphql`
  query($category: String) {
    postsByCategory: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            author
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
            tags
          }
        }
      }
    }
  }
`
