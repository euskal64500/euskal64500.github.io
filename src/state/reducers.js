import { combineReducers } from 'redux';

const initialBlogState = {
  category: '',
};

const updateBlog = ( state = initialBlogState, action ) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_CATEGORY':
      return { 
        category: action.category 
      };
    default:
      return state;
  }
};

export const website = combineReducers({
  blog: updateBlog,
});
