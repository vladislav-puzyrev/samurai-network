import { sendMessageActionCreator } from '../../../redux/messages-reducer'
import Messages from './Messages'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

function mapStateToProps (state) {
  return {
    state: state.messagesPage,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    buttonOnClick (formData) {
      dispatch(sendMessageActionCreator(formData))
    },
  }
}

/*
let AuthRedirectComponent = withAuthRedirect(Messages);
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default MessagesContainer;*/

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Messages)