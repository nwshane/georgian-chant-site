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
    recordingFile: ?{},
    visible: boolean
  }

  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.handleChangeFile = this.handleChangeFile.bind(this)
    self.showForm = this.showForm.bind(this)
    self.state = {
      visible: false
    }
  }

  handleChangeFile ({target: {files}}: {target: { files: Array<{}>}}) {
    console.log('recordingFile', files[0])
    this.setState({
      recordingFile: files[0]
    })
  }

  handleSubmit () {
    const { chant: { slug: chantSlug } } = this.props
    const { recordingFile } = this.state

    this.props.submitRecording({ chantSlug, recordingFile })
  }

  showForm () {
    this.setState({
      visible: true
    })
  }

  render () {
    return (
      <RecordingFormPresentation
        handleSubmit={this.handleSubmit}
        handleChangeFile={this.handleChangeFile}
        visible={this.state.visible}
        showForm={this.showForm}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {submitRecording},
  dispatch
)

export default connect(null, mapDispatchToProps)(RecordingForm)
