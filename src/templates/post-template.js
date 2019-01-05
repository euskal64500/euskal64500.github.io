import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import postStyles from '../styles/post.module.css'

const Post = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <SEO title="Blog" />
      <div className={postStyles.post}>
        <h1 className={postStyles.title}>{frontmatter.title}</h1>
        <p className={postStyles.date}>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      frontmatter: PropTypes.shape({
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

Post.defaultProps = {
  data: {},
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
      }
    }
  }
`
