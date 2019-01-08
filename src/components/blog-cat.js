import PropTypes from 'prop-types'
import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'

import catStyles from '../styles/blog-cat.module.css'

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? { className: catStyles.activeLink }
    : { className: catStyles.link }

const BlogCat = ({ category }) => (
  <Link
    key={category}
    getProps={isPartiallyActive}
    to={`/blog/${kebabCase(category)}/`}
  >
    <p className={catStyles.text}>{category}</p>
  </Link>
)

BlogCat.propTypes = {
  category: PropTypes.string.isRequired,
}

BlogCat.defaultProps = {}

export default BlogCat
