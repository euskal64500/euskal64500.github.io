import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import BlogLayout from '../components/blog-layout'
import BlogPost from '../components/blog-post'


const FilteredPosts = ({ pageContext, data }) => {
  const { edges } = data.blogs;
  return (
    <div>
      <SEO title="Blog" />
      <BlogLayout>
        { 
          edges.map(({ node }, index) => (
            <BlogPost key={ index } { ...node.frontmatter } />
          ))
        }
      </BlogLayout>
    </div>
  )
};

FilteredPosts.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
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
        }
      }
    }
  }
}
`
