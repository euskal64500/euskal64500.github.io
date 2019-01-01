import PropTypes from 'prop-types'
import React from 'react'
import kebabCase from "lodash/kebabCase"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import navStyles from '../styles/blog-nav.module.css'

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: navStyles.activeLink }
    : { className: navStyles.link }
}


const BlogNav = ({ context }) => (
  <StaticQuery
    query={graphql`
      query {
        categories: allMarkdownRemark{
          distinct(field: frontmatter___category)
        }
      }
    `}
    render = { data  => (
      <nav className={ navStyles.nav }>
      {
        data.categories.distinct.map((category, index) => 
          <Link 
            key={ index }
            getProps={ isPartiallyActive }
            to={ `/blog/${kebabCase( category )}/` }
          >
            <p className={ navStyles.text }>{ category }</p>
          </Link>
        )
      }
      </nav>
    )}
  />
)

//
// activeClassName={ navStyles.activeLink }

BlogNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
}

BlogNav.defaultProps = {
  categories: []
}

export default BlogNav
