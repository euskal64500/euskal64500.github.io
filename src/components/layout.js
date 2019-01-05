import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Page from './page'
import layoutStyles from '../styles/layout.module.css'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.site}>
        <div className={layoutStyles.banner}>
          <Header menuLinks={data.site.siteMetadata.menuLinks} />
        </div>
        <div className={layoutStyles.content}>
          <Page {...props} />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
