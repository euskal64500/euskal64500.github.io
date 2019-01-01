import PropTypes from 'prop-types'
import React from 'react'
import kebabCase from "lodash/kebabCase"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import navStyles from '../styles/blog-nav.module.css'

const BlogNav = () => (
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
            activeClassName={ navStyles.activeLink }
            className={ navStyles.link } 
            to={ `/posts/${kebabCase( category )}/` }
          >
            <p className={ navStyles.text }>{ category }</p>
          </Link>
        )
      }
      </nav>
    )}
  />
)


BlogNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
}

BlogNav.defaultProps = {
  categories: []
}

export default BlogNav
