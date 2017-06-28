// @flow
import { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import type { Recording } from '~/data/types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteRecording from '~/data/thunks/deleteRecording'

type Props = {
  deleteRecording: Function,
  recording: Recording
}

class DeleteRecordingButton extends Component {
  props: Props

  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { recording, deleteRecording } = this.props
    deleteRecording(recording)
  }

  render () {
    return (
      <FlatButton label='Delete' secondary onTouchTap={this.handleClick} />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {deleteRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(DeleteRecordingButton)
