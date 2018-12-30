import PropTypes from 'prop-types';
import React from 'react';
import blogCardStyles from '../styles/blog-card.module.css'

const BlogCard = ({ category, title, date, description }) => {
  const since = 2;

  return (
    <div className={ blogCardStyles.card }>
      <p className={ blogCardStyles.category }>{ `${category} - posted ${since} hours ago` }</p>
      <h1 className={ blogCardStyles.title }>{ title }</h1>
      <p className={ blogCardStyles.description }>{ description }</p>
    </div>
  )
}

BlogCard.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

BlogCard.defaultProps = {
  category: 'Lorem Ipsum',
  title: 'Lorem Ipsum',
  date: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export default BlogCard