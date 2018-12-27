import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const banner = {
  display: 'flex', 
  flex: 1,
  backgroundColor: 'black',
  color: 'white'
}

const content = {
  maxWidth: 960,
  flex: 1,
  margin: '0 auto',
  padding: '1.45rem 1.0875rem',
}

const links = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyleType: 'none'
}

const Header = ({ siteTitle, menuLinks }) => (
  <div style= { banner }>
    <div style={ content }>
      <h1>Olivier's blog</h1>
      <nav>
        <ul style={ links }>
        {
          menuLinks.map(link =>
            <li key={link.name}>
              <Link style={{ color: 'white' }} to={link.link}>{link.name}</Link>
            </li>
          )
        }
        </ul>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
