// @flow
import type { Dispatch } from 'redux'
import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import type { Recording } from '~/data/types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteRecording from '~/data/thunks/recordings/delete'

type Props = {
  deleteRecording: Function,
  recording: Recording,
  recordingId: string
}

class DeleteRecordingButton extends Component<Props> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { recording, recordingId, deleteRecording } = this.props
    deleteRecording(recording, recordingId)
  }

  render () {
    return (
      <FlatButton label='Delete' secondary onTouchTap={this.handleClick} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {deleteRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(DeleteRecordingButton)
