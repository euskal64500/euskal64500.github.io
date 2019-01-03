import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogPost from '../components/blog-post'


const FilteredPosts = ({ data }) => {
  const { edges } = data.blogs;
  return (
    <div>
      <SEO title="Blog" />
      <div>
        { 
          edges.map(({ node }, index) => (
            <BlogPost key={ index } { ...node.frontmatter } />
          ))
        }
      </div>
    </div>
  )
};

FilteredPosts.propTypes = {
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
              cover_image: PropTypes.object.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default FilteredPosts

export const pageQuery = graphql`
query($category: String) {
  blogs: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: { frontmatter: { category: { in: [$category] } } }
  )
  {
    edges {
      node {
        id
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          category
          title
          description
          path
          cover_image {         
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
