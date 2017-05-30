// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import subscribeAuthChange from '~/data/thunks/subscribeAuthChange'

class AuthChangeSubscriber extends Component {
  componentDidMount () {
    this.props.subscribeAuthChange()
  }

  render () {
    return null
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {subscribeAuthChange},
  dispatch
)

export default connect(null, mapDispatchToProps)(AuthChangeSubscriber)
