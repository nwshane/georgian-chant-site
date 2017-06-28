// @flow
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { Chant } from '~/data/types'
import submitRecording from '~/data/thunks/recordings/create'
import RecordingFormPresentation from './RecordingFormPresentation'

class RecordingForm extends Component {
  props: {
    chant: Chant,
    submitRecording: Function
  }

  state: {
    recordingFile: ?{
      name: string
    }
  }

  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.handleChangeFile = this.handleChangeFile.bind(this)
    self.state = { recordingFile: null }
  }

  handleChangeFile ({target: {files}}: {target: { files: Array<{name: string}>}}) {
    console.log('recordingFile', files[0])
    this.setState({
      recordingFile: files[0]
    })
  }

  handleSubmit () {
    const { chant: { slug: chantSlug } } = this.props
    const { recordingFile } = this.state

    this.props.submitRecording({ chantSlug, recordingFile })
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

export default connect(null, mapDispatchToProps)(RecordingForm)
