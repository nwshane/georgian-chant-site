// @flow
import { Component } from 'react'
import type { UploadTask } from '~/data/types'
import UploadTaskRowPresentation from './UploadTaskRowPresentation'

type Props = {
  uploadTask: UploadTask,
  removeUploadTask: Function,
  uploadTaskKey: string
}

class UploadTaskRow extends Component {
  props: Props

  state = {
    percentLoaded: 0
  }

  constructor (props: Props) {
    super(props)
    const self: any = this
    self.setPercentLoaded = this.setPercentLoaded.bind(this)
  }

  setPercentLoaded (snapshot: { bytesTransferred: number, totalBytes: number }) {
    console.log('Calling this.setState')
    this.setState({
      percentLoaded: Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100, 2)
    })
  }

  componentDidMount () {
    const { uploadTaskKey, uploadTask, removeUploadTask } = this.props

    console.log('uploadTask in UploadTaskRow', uploadTask)

    uploadTask.on('state_changed', this.setPercentLoaded)

    uploadTask.then(() => {
      removeUploadTask(uploadTaskKey)
    }).catch(() => {
      removeUploadTask(uploadTaskKey)
    })
  }

  componentWillUnmount () {
    const { uploadTask } = this.props
    uploadTask.off('state_changed', this.setPercentLoaded)
  }

  render () {
    return (
      <UploadTaskRowPresentation percentLoaded={this.state.percentLoaded} />
    )
  }
}

export default UploadTaskRow
