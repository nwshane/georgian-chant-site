// @flow
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import type {Dispatch} from '~/data/types'
import NewSheetMusicFormPresentation from './NewSheetMusicFormPresentation'
import createSheetMusic from '~/data/thunks/sheetMusic/createSheetMusic'

type Props = {
  createSheetMusic: Function
}

type State = {
  selectedFile: ?{
    name: string
  }
}

type FileInputValue = {target: {files: Array<{name: string}>}}

type FormValues = {
  school: string
}

class NewSheetMusicForm extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleChangeFile = self.handleChangeFile.bind(self)
    self.handleSubmit = self.handleSubmit.bind(self)
    this.state = {selectedFile: null}
  }

  handleChangeFile ({target: {files}}: FileInputValue) {
    this.setState({
      selectedFile: files[0]
    })
  }

  handleSubmit (formValues: FormValues) {
    console.log('submitting formValues', formValues)
    this.props.createSheetMusic(this.state.selectedFile, formValues)
  }

  render () {
    return (
      <NewSheetMusicFormPresentation
        handleSubmit={this.handleSubmit}
        handleChangeFile={this.handleChangeFile}
        selectedFile={this.state.selectedFile}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {createSheetMusic},
  dispatch
)

export default connect(null, mapDispatchToProps)(NewSheetMusicForm)
