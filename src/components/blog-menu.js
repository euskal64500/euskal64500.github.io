import PropTypes from 'prop-types'
import React from 'react'

import blogNavStyles from '../styles/blog-menu.module.css'

class BlogMenu extends React.Component {

  constructor( props ) {
    super(props);
    this.onSelection = this.onSelection.bind(this);
    this.state = { activeCategory: '' };
  }

  onSelection(categorySelected) {
    this.setState({
      activeCategory: categorySelected
    });
    this.props.onSelect(categorySelected);
  }

  render() {
    return (
      <nav className={ blogNavStyles.nav }>
      {
        this.props.categories.map((category, index) => 
          <button 
            key={ index } 
            className={ this.state.activeCategory === category ? blogNavStyles.activeButton : blogNavStyles.button } 
            onClick={ () => this.onSelection(category) }
          >
            { category }
          </button>
        )
      }
      </nav>
    )
  }
}

BlogMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
}

BlogMenu.defaultProps = {
  categories: []
}

export default BlogMenu
