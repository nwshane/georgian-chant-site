// @flow
import { Component } from 'react'
import NewRecordingForm from './NewRecordingForm'
import EditRecordingForms from './EditRecordingForms'
import type { Chant, UploadTask } from '~/data/types'

type Props = {
  chant: Chant
}

class RecordingsForm extends Component {
  props: Props
  state = {
    uploadTasks: []
  }

  constructor (props: Props) {
    super(props)
    const self: any = this
    self.addUploadTask = self.addUploadTask.bind(self)
    self.removeUploadTask = self.removeUploadTask.bind(self)
  }

  addUploadTask (uploadTask: UploadTask) {
    this.setState({
      uploadTasks: this.state.uploadTasks.concat(uploadTask)
    })
  }

  removeUploadTask (uploadTask: UploadTask) {
    const { uploadTasks } = this.state

    this.setState({
      uploadTasks: uploadTasks.filter((uploadTaskItem) => (uploadTaskItem !== uploadTask))
    })
  }

  render () {
    const { chant } = this.props
    return (
      <section>
        <h3>Recordings</h3>
        <EditRecordingForms
          chant={chant}
          uploadTasks={this.state.uploadTasks}
          removeUploadTask={this.removeUploadTask}
        />
        <NewRecordingForm
          chant={chant}
          addUploadTask={this.addUploadTask}
        />
      </section>
    )
  }
}

export default RecordingsForm
