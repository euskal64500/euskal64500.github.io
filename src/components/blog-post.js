import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import blogPostStyles from '../styles/blog-post.module.css'

const BlogPost = ({ category, title, date, description, path }) => {
  const since = 2;

  return (
    <div className={ blogPostStyles.card }>
      <Link className={ blogPostStyles.link } to={ path }>
        <p className={ blogPostStyles.category }>{ `${category} - posted ${since} hours ago` }</p>
        <h1 className={ blogPostStyles.title }>{ title }</h1>
        <p className={ blogPostStyles.description }>{ description }</p>
      </Link>
    </div>
  )
}

BlogPost.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
}

BlogPost.defaultProps = {
  category: 'Lorem Ipsum',
  title: 'Lorem Ipsum',
  date: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default BlogPost