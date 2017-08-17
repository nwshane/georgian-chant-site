// @flow
import React, { Component } from 'react'
import type { UploadTask } from '~/data/types'

type Props = {
  uploadTask: UploadTask,
  removeUploadTask: Function,
  uploadTaskKey: string
}

type State = {
  percentLoaded: number
}

class UploadTaskPercentage extends Component<Props, State> {
  state = {
    percentLoaded: 0
  }

  constructor (props: Props) {
    super(props)
    const self: any = this
    self.setPercentLoaded = this.setPercentLoaded.bind(this)
  }

  setPercentLoaded (snapshot: { bytesTransferred: number, totalBytes: number }) {
    this.setState({
      percentLoaded: Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
    })
  }

  componentDidMount () {
    const { uploadTaskKey, uploadTask, removeUploadTask } = this.props

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
      <span>{this.state.percentLoaded}%</span>
    )
  }
}

export default UploadTaskPercentage
