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

const Presentation = (props: Props) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation)
