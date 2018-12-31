import PropTypes from 'prop-types';
import React from 'react';
import BlogCard from './blog-card'
import blogListStyles from '../styles/blog-list.module.css'

const BlogList = ({ posts }) => {
  const Posts = posts
    .map(post => <BlogCard 
                    key={ post.id }
                    category={ post.category }
                    title={ post.title }
                    date={ post.date }
                    description={ post.description }
                  />
        )

  return <div className={ blogListStyles.posts }>{ Posts }</div>
};

BlogList.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object),
}

BlogList.defaultProps = {
  edges: {},
}

export default BlogList
