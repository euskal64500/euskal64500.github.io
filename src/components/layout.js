import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import layoutStyles from '../styles/layout.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={ layoutStyles.site }>
        <div className={ layoutStyles.header }>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks} 
            siteTitle={data.site.siteMetadata.title}
          />
        </div>
        <div className={ layoutStyles.content }>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
