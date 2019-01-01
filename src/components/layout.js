import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import layoutStyles from '../styles/layout.module.css'

const PageLayout = ({ isBlogPage, data, children }) => {
  return(
    <div className ={ layoutStyles.site }>
      <div className ={ layoutStyles.banner }>
        <div className ={ layoutStyles.header }>
          <Header
            menuLinks ={ data.site.siteMetadata.menuLinks } 
            siteTitle ={ data.site.siteMetadata.title }
          />
        </div>
      </div>
      <div className={ layoutStyles.content }>
        { children }
      </div>
    </div>
  )
}

const Layout = ({ children, pageContext }) => (
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
    render={ data => <PageLayout isBlogPage={ false } data={ data } children={ children }/> }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
