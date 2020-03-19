import { addPost } from '../../../../redux/profile-reducer'
import Posts from './Posts'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost (formData) {
      dispatch(addPost(formData))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer