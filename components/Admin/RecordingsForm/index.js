// @flow
import React, { Component } from 'react'
import NewRecordingForm from './NewRecordingForm'
import EditRecordingForms from './EditRecordingForms'
import type { Chant, UploadTask } from '~/data/types'

type Props = {
  chant: Chant
}

type State = {
  uploadTasks: {
    [string]: UploadTask
  }
}

class RecordingsForm extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.addUploadTask = self.addUploadTask.bind(self)
    self.removeUploadTask = self.removeUploadTask.bind(self)
    this.state = {
      uploadTasks: {}
    }
  }

  addUploadTask (uploadTaskObject: {[string]: UploadTask}) {
    this.setState({
      uploadTasks: Object.assign({}, this.state.uploadTasks, uploadTaskObject)
    })
  }

  removeUploadTask (uploadTaskKey: string) {
    const { uploadTasks } = this.state
    delete uploadTasks[uploadTaskKey]

    this.setState({
      uploadTasks: Object.assign({}, uploadTasks)
    })
  }

  render () {
    const { chant } = this.props
    return (
      <section>
        <EditRecordingForms
          chant={chant}
          uploadTasks={this.state.uploadTasks}
          removeUploadTask={this.removeUploadTask}
        />
        <h3>
          Upload New Recording
        </h3>
        <NewRecordingForm
          chant={chant}
          addUploadTask={this.addUploadTask}
        />
        <style jsx>{`
          h3 {
            margin-top: 40px;
          }
        `}</style>
      </section>
    )
  }
}

export default RecordingsForm
