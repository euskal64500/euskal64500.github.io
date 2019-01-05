import React from 'react'
import PropTypes from 'prop-types'
import BlogLayout from './blog-layout'

const Page = props => {
  const {
    pageContext: { layout },
    children,
  } = props

  if (layout === 'blog') {
    return <BlogLayout>{children}</BlogLayout>
  }
  return <div>{children}</div>
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  pageContext: PropTypes.shape({
    layout: PropTypes.string,
  }).isRequired,
}

export default Page
