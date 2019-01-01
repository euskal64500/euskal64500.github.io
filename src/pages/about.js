import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <div>
    <SEO title="About me" />
    <h1>Hi from the about me page</h1>
    <p>Welcome to the about me page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
