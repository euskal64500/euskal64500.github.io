import PropTypes from 'prop-types'
import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

import tagStyles from '../styles/blog-tag.module.css'

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? { className: tagStyles.activeLink }
    : { className: tagStyles.link }

const BlogTag = ({ tag }) => (
  <Link key={tag} getProps={isPartiallyActive} to={`/blog/${kebabCase(tag)}/`}>
    <p className={tagStyles.text}>{tag}</p>
  </Link>
)

BlogTag.propTypes = {
  tag: PropTypes.string.isRequired,
}

BlogTag.defaultProps = {}

export default BlogTag
