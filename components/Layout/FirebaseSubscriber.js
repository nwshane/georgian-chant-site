// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import subscribeToFirebase from '~/data/thunks/subscribeToFirebase'

type Props = {
  subscribeToFirebase: Function
}

class FirebaseSubscriber extends Component<Props> {
  componentDidMount () {
    this.props.subscribeToFirebase()
  }

  render () {
    return null
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {subscribeToFirebase},
  dispatch
)

export default connect(null, mapDispatchToProps)(FirebaseSubscriber)
