// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Chant } from '~/data/types'
import ChantFormPresentation from './ChantFormPresentation'
import submitNewChant from '~/data/thunks/chants/create'
import updateChant from '~/data/thunks/chants/update'
import localizeObject from '~/helpers/localizeObject'

type Props = {
  chant: Chant,
  updateChant: Function,
  submitNewChant: Function
}

// TODO: Localize
class ChantForm extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (formValues) {
    const localizedValues = localizeObject(formValues)
    if (this.props.chant) {
      this.props.updateChant(this.props.chant.slug, localizedValues)
    } else {
      this.props.submitNewChant(localizedValues)
    }
  }

  updateState (values) {
    this.setState(values)
  }

  render () {
    return (
      <ChantFormPresentation
        handleSubmit={this.handleSubmit}
        chant={this.props.chant}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {submitNewChant, updateChant},
  dispatch
)

export default connect(null, mapDispatchToProps)(ChantForm)
