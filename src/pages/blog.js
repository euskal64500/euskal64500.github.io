import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogMenu from "../components/blog-menu"
import BlogList from "../components/blog-list"
import blogStyles from '../styles/blog.module.css'


const BlogPage = ({
  data: {
    categories: { distinct: listOfCategories },
    blogs: { edges },
  },
}) => (
  <Layout>
    <SEO title="Blog" />
    <div className={ blogStyles.page }>
      <div className={ blogStyles.blog }>
        <BlogList edges={ edges }/>
      </div>
      <div className={ blogStyles.categories }>
        <BlogMenu categories={ listOfCategories }/>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
query {
    categories:allMarkdownRemark{
      distinct(field: frontmatter___category)
    }
    paths: allMarkdownRemark{
      distinct(field: frontmatter___path)
    }
    blogs: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage
