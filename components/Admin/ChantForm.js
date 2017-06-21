// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Chant } from '~/data/types'
import ChantFormPresentation from './ChantFormPresentation'
import submitNewChant from '~/data/thunks/submitNewChant'
import updateChant from '~/data/thunks/updateChant'
import localizeObject from '~/helpers/localizeObject'

// TODO: Localize
class ChantForm extends Component {
  props: {
    chant: Chant,
    updateChant: Function,
    submitNewChant: Function
  }
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
