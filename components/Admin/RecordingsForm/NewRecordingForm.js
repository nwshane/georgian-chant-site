// @flow
import React, { Component } from 'react'
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { Chant, UploadTask } from '~/data/types'
import createRecording from '~/data/thunks/recordings/createRecording'
import NewRecordingFormPresentation from './NewRecordingFormPresentation'

type Props = {
  chant: Chant,
  createRecording: Function,
  addUploadTask: Function
}

type State = {
  recordingFile: ?{
    name: string
  }
}

class NewRecordingForm extends Component<Props, State> {
  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.handleChangeFile = this.handleChangeFile.bind(this)
    self.state = { recordingFile: null }
  }

  handleChangeFile ({target: {files}}: {target: { files: Array<{name: string}>}}) {
    this.setState({
      recordingFile: files[0]
    })
  }

  async handleSubmit (formValues) {
    const { chant: { slug: chantSlug } } = this.props
    const { recordingFile } = this.state

    const recordingData = {
      chantSlug,
      recordingFile,
      ...formValues
    }

    const uploadTaskObject: { [string]: UploadTask } =
      await this.props.createRecording(recordingData)

    this.props.addUploadTask(uploadTaskObject)
    this.setState({ recordingFile: null })
  }

  render () {
    return (
      <NewRecordingFormPresentation
        handleSubmit={this.handleSubmit}
        handleChangeFile={this.handleChangeFile}
        recordingFile={this.state.recordingFile}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {createRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(NewRecordingForm)
