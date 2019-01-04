import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import BlogLayout from './blog-layout'
import layoutStyles from '../styles/layout.module.css'

const PageLayout = ({ data, children }) => (
  <div className={layoutStyles.site}>
    <div className={layoutStyles.banner}>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
    </div>
    <div className={layoutStyles.content}>{children}</div>
  </div>
)

const PostsLayout = ({ data, children }) => (
  <div className={layoutStyles.site}>
    <div className={layoutStyles.banner}>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
    </div>
    <div className={layoutStyles.content}>
      <BlogLayout>{children}</BlogLayout>
    </div>
  </div>
)

const Layout = ({ children, pageContext }) => (
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
    render={data => {
      if (pageContext.layout === 'blog') {
        return <PostsLayout data={data} children={children} />
      }
      return <PageLayout data={data} children={children} />
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageContext: PropTypes.shape({
    layout: PropTypes.string.isRequired,
  }),
}

Layout.defaultProps = {
  children: {},
  pageContext: {
    layout: '',
  },
}

export default Layout
