import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, StaticQuery, graphql } from 'gatsby'
import navStyles from '../styles/blog-nav.module.css'

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? { className: navStyles.activeLink }
    : { className: navStyles.link }

const BlogNav = () => (
  <StaticQuery
    query={graphql`
      query {
        categories: allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
    `}
    render={data => (
      <nav className={navStyles.nav}>
        {data.categories.distinct.map(category => (
          <Link
            key={category}
            getProps={isPartiallyActive}
            to={`/blog/${kebabCase(category)}/`}
          >
            <p className={navStyles.text}>{category}</p>
          </Link>
        ))}
      </nav>
    )}
  />
)

//
// activeClassName={ navStyles.activeLink }

BlogNav.propTypes = {}

BlogNav.defaultProps = {}

export default BlogNav
