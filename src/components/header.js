import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.css'

// this link will be active when itself or deeper routes
// are current
const isActive = ({ isCurrent }) =>
  isCurrent
    ? { className: headerStyles.activeLink }
    : { className: headerStyles.link }

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? { className: headerStyles.activeLink }
    : { className: headerStyles.link }

const Header = ({ menuLinks }) => (
  <nav className={headerStyles.menu}>
    {menuLinks.map(link => (
      <Link
        key={link.name}
        getProps={link.name === 'HOME' ? isActive : isPartiallyActive}
        to={link.link}
        state={{ selectedMenu: link.name }}
      >
        <p className={headerStyles.text}>{link.name}</p>
      </Link>
    ))}
  </nav>
)

Header.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
  menuLinks: [],
}

export default Header
