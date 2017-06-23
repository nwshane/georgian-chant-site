// @flow
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import submitRecording from '~/data/thunks/submitRecording'
import RecordingFormPresentation from './RecordingFormPresentation'

class RecordingForm extends Component {
  state: {
    recordingFile: ?{}
  }

  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.handleChangeFile = this.handleChangeFile.bind(this)
  }

  handleChangeFile ({target: {files}}: {target: { files: Array<{}>}}) {
    console.log('recordingFile', files[0])
    this.setState({
      recordingFile: files[0]
    })
  }

  handleSubmit () {
    this.props.submitRecording(this.state.recordingFile)
  }

  render () {
    return (
      <RecordingFormPresentation
        handleSubmit={this.handleSubmit}
        handleChangeFile={this.handleChangeFile}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {submitRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(RecordingForm)
