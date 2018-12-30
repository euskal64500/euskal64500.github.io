import PropTypes from 'prop-types';
import React from 'react';
import BlogCard from './blog-card'
import blogListStyles from '../styles/blog-list.module.css'

const BlogList = ({ edges }) => {
  const Posts = edges
    .map(edge => <BlogCard 
                    key={ edge.node.id }
                    category={ edge.node.category }
                    title={ edge.node.title }
                    date={ edge.node.date }
                    description={ edge.node.description }
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
