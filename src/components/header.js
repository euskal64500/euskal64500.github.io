import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.css'

const Header = ({ siteTitle, menuLinks, location }) => (
  <nav className={ headerStyles.menu }>
  {
    menuLinks.map((link, index) => 
      <Link 
        key ={ index }
        activeClassName ={ headerStyles.activeLink }
        className = { headerStyles.link } 
        to ={ link.link }
        state = {{ selectedMenu: link.name }}
      >
        <p className={ headerStyles.text }>{ link.name }</p>
      </Link>
    )
  }
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: []
}

export default Header
