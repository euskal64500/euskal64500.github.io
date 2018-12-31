import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogMenu from "../components/blog-menu"
import BlogList from "../components/blog-list"
import blogStyles from '../styles/blog.module.css'


class BlogPage extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      activeCategory: ''
    }
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect( category ) {
    this.setState({
      activeCategory: category
    });
  }

  render() {
    let {
      data: {
        categories: { distinct: listOfCategories },
        blogs: { edges },
      }
    } = this.props;

    const posts = edges.map(edge => {
      let frontmatter = {
        id: edge.node.id,
        author: edge.node.frontmatter.author,
        date: edge.node.frontmatter.date,
        category: edge.node.frontmatter.category,
        title: edge.node.frontmatter.title,
        description: edge.node.frontmatter.description,
        path: edge.node.frontmatter.path
      }
      return frontmatter;
    });

    let results = {};
    if (!!this.state.activeCategory) {
      results = posts.filter(post => post.category === this.state.activeCategory)
    } else {
      results = [...posts];
    }

    return (
      <Layout>
        <SEO title="Blog" />
        <div className={ blogStyles.page }>
          <div className={ blogStyles.blog }>
            <BlogList posts={ results }/>
          </div>
          <div className={ blogStyles.categories }>
            <BlogMenu categories={ listOfCategories } onSelect={this.onSelect}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query {
  categories:allMarkdownRemark{
    distinct(field: frontmatter___category)
  }
  paths: allMarkdownRemark{
    distinct(field: frontmatter___path)
  }
  blogs: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
  )
  {
    edges {
      node {
        id
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          category
          title
          description
          path
        }
      }
    }
  }
}
`

export default BlogPage
