import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import blogPostStyles from '../styles/blog-post.module.css'

const BlogPost = ({ category, title, description, cover, slug }) => {
  const since = 2

  return (
    <div className={blogPostStyles.card}>
      <Link className={blogPostStyles.link} to={slug}>
        <div className={blogPostStyles.content}>
          <div className={blogPostStyles.left}>
            <p className={blogPostStyles.category}>
              {`${category} - posted ${since} hours ago`}
            </p>
            <h1 className={blogPostStyles.title}>{title}</h1>
            <p className={blogPostStyles.description}>{description}</p>
          </div>
          <div className={blogPostStyles.right}>
            <Img sizes={cover.childImageSharp.sizes} />
          </div>
        </div>
      </Link>
    </div>
  )
}

BlogPost.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

BlogPost.defaultProps = {}

export default BlogPost
