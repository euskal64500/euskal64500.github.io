import React from 'react'
import PropTypes from 'prop-types'
import BlogNav from "./blog-nav"
import blogStyles from '../styles/blog.module.css'

const BlogLayout = ({ children }) => (
  <div className={ blogStyles.page }>
    <div className={ blogStyles.blog }>
      { children }
    </div>
    <div className={ blogStyles.categories }>
      <BlogNav/>
    </div>
  </div>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout;
