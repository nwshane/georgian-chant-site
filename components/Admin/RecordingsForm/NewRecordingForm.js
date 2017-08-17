// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { Chant, UploadTask } from '~/data/types'
import submitRecording from '~/data/thunks/recordings/create'
import RecordingFormPresentation from './RecordingFormPresentation'

type Props = {
  chant: Chant,
  submitRecording: Function,
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
    const { school } = formValues
    const { chant: { slug: chantSlug } } = this.props
    const { recordingFile } = this.state

    const recordingData = {
      chantSlug,
      recordingFile,
      school
    }

    const uploadTaskObject: { [string]: UploadTask } =
      await this.props.submitRecording(recordingData)

    this.props.addUploadTask(uploadTaskObject)
    this.setState({ recordingFile: null })
  }

  render () {
    return (
      <RecordingFormPresentation
        handleSubmit={this.handleSubmit}
        handleChangeFile={this.handleChangeFile}
        recordingFile={this.state.recordingFile}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {submitRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(NewRecordingForm)
