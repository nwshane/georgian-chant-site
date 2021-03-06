// @flow
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import type {Chant, Dispatch} from '~/data/types'
import NewSheetMusicFormPresentation from './NewSheetMusicFormPresentation'
import createSheetMusic from '~/data/thunks/sheetMusic/createSheetMusic'

type Props = {
  chant: Chant,
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
    this.props.createSheetMusic(
      this.state.selectedFile,
      {
        chantSlug: this.props.chant.slug,
        ...formValues
      }
    )
    this.setState({
      selectedFile: null
    })
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
