import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogLayout from '../components/blog-layout'

import postStyles from '../styles/post.module.css'

const Post = ({ pageContext, data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogLayout>
        <div className={ postStyles.post }>
          <h1 className={ postStyles.title }>{frontmatter.title}</h1>
          <p className={ postStyles.date }>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </BlogLayout>
    </Layout>
  )
};

Post.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    })  
  }),
}

export default Post

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        category
      }
    }
  }
`