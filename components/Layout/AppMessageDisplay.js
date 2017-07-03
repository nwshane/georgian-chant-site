// @flow
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { AppMessageCategory, State } from '~/data/types'
import { clearAppMessage, getAppMessageCategory, getAppMessageText } from '~/data/ducks/appMessage'

type Props = {
  messageText: string,
  clearAppMessage: Function,
  messageCategory: AppMessageCategory
}

const categoryToStylesMapper = {
  neutral: {},
  success: {
    backgroundColor: 'green'
  },
  error: {
    backgroundColor: 'red'
  }
}

const AppMessageDisplayPresentation = (props: Props) => (
  <Snackbar
    open={!!props.messageText}
    message={props.messageText}
    autoHideDuration={4000}
    onRequestClose={props.clearAppMessage}
    bodyStyle={categoryToStylesMapper[props.messageCategory]}
  />
)

const mapStateToProps = (state: State) => ({
  messageText: getAppMessageText(state),
  messageCategory: getAppMessageCategory(state),
  key: getAppMessageText(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {clearAppMessage},
  dispatch
)

const AppMessageDisplay = connect(mapStateToProps, mapDispatchToProps)(AppMessageDisplayPresentation)

export default AppMessageDisplay
