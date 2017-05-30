// @flow
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import type { State } from '~/data/types'
import { getAppMessage } from '~/data/ducks/appMessage'

type Props = {
  message: string
}

const Presentation = (props: Props) => (
  <Snackbar
    open={!!props.message}
    message={props.message}
    autoHideDuration={4000}
  />
)

const mapStateToProps = (state: State) => ({
  message: getAppMessage(state)
})

export default connect(mapStateToProps)(Presentation)
