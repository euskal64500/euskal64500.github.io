import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const GamePage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the game page</h1>
    <p>Welcome to game page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default GamePage
