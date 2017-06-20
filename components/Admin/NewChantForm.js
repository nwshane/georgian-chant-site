// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewChantFormPresentation from './NewChantFormPresentation'
import submitNewChant from '~/data/thunks/submitNewChant'
import localizeObject from '~/helpers/localizeObject'

// TODO: Localize
class NewChantForm extends Component {
  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (formValues) {
    const localizedValues = localizeObject(formValues)
    this.props.submitNewChant(localizedValues)
  }

  updateState (values) {
    this.setState(values)
  }

  render () {
    return (
      <NewChantFormPresentation
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {submitNewChant},
  dispatch
)

export default connect(null, mapDispatchToProps)(NewChantForm)
