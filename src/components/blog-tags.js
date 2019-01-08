import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BlogCat from './blog-cat'
import BlogTag from './blog-tag'
import tagsStyles from '../styles/blog-tags.module.css'

const BlogTags = () => (
  <StaticQuery
    query={graphql`
      query {
        categories: allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
        tags: allMarkdownRemark {
          distinct(field: frontmatter___tags)
        }
      }
    `}
    render={data => (
      <nav className={tagsStyles.nav}>
        {data.categories.distinct.map(category => (
          <BlogCat category={category} />
        ))}
        {data.tags.distinct.map(tag => (
          <BlogTag tag={tag} />
        ))}
      </nav>
    )}
  />
)

BlogTags.propTypes = {}

BlogTags.defaultProps = {}

export default BlogTags
