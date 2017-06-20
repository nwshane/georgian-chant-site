// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NewChantFormPresentation from './NewChantFormPresentation'
import submitNewChant from '~/data/thunks/submitNewChant'

// TODO: Localize
class NewChantForm extends Component {
  state = {
    name: {
      ka: ''
    },
    slug: ''
  }

  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.updateState = this.updateState.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.submitNewChant(this.state)
  }

  updateState (values) {
    this.setState(values)
  }

  render () {
    return (
      <NewChantFormPresentation
        updateState={this.updateState}
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
