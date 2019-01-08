import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogPost from '../components/blog-post'

const FilteredByTagPosts = ({ data }) => {
  const { edges } = data.postsByTag
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

FilteredByTagPosts.propTypes = {
  data: PropTypes.shape({
    postsByTag: PropTypes.shape({
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

FilteredByTagPosts.defaultProps = {
  data: {},
}

export default FilteredByTagPosts

export const pageQuery = graphql`
  query($tag: String) {
    postsByTag: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
