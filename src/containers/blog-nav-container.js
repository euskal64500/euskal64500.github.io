import { connect } from 'react-redux'
import BlogNav from '../components/blog-nav'

const mapStateToProps = state => ({
  selectedCategory: state.blog.category,
})

const BlogNavContainer = connect(mapStateToProps)(BlogNav)

export default BlogNavContainer
