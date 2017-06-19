// @flow
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { State } from '~/data/types'
import { clearAppMessage, getAppMessage } from '~/data/ducks/appMessage'

type Props = {
  message: string,
  clearAppMessage: Function
}

const AppMessageDisplayPresentation = (props: Props) => (
  <Snackbar
    open={!!props.message}
    message={props.message}
    autoHideDuration={4000}
    onRequestClose={props.clearAppMessage}
  />
)

const mapStateToProps = (state: State) => ({
  message: getAppMessage(state),
  key: getAppMessage(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {clearAppMessage},
  dispatch
)

const AppMessageDisplay = connect(mapStateToProps, mapDispatchToProps)(AppMessageDisplayPresentation)

export default AppMessageDisplay
