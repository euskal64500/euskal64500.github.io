import React from 'react'
import PropTypes from 'prop-types'
import BlogTags from './blog-tags'
import blogStyles from '../styles/blog-layout.module.css'

const BlogLayout = ({ children }) => (
  <div className={blogStyles.page}>
    <div className={blogStyles.tags}>
      <BlogTags />
    </div>
    <div className={blogStyles.posts}>{children}</div>
  </div>
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
