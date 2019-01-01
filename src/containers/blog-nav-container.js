import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onUnlock } from '../actions';
import BlogNav from '../components/BlogNav';


const mapStateToProps = state => ({
  selectedCategory: state.blog.category,
});

const BlogNavContainer = connect(
  mapStateToProps,
)(BlogNav);

export default BlogNavContainer;
