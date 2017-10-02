// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Choir } from '~/data/types'
import ChoirFormPresentation from './ChoirFormPresentation'
import createChoir from '~/data/thunks/choirs/createChoir'
import updateChoir from '~/data/thunks/choirs/updateChoir'
import localizeObject from '~/helpers/localizeObject'
import type { Dispatch } from 'redux'

type Props = {
  choir: ?Choir,
  updateChoir: Function,
  createChoir: Function
}

// TODO: Localize
class ChoirForm extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (formValues) {
    const localizedValues = localizeObject(formValues)
    if (this.props.choir) {
      this.props.updateChoir(this.props.choir.slug, localizedValues)
    } else {
      this.props.createChoir(localizedValues)
    }
  }

  updateState (values) {
    this.setState(values)
  }

  render () {
    return (
      <ChoirFormPresentation
        handleSubmit={this.handleSubmit}
        choir={this.props.choir}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {createChoir, updateChoir},
  dispatch
)

export default connect(null, mapDispatchToProps)(ChoirForm)
