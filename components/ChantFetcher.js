import { Component } from 'react'
import { fromJS } from 'immutable'
import { database } from '~/data/firebase'

class ChantFetcher extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chant: {}
    }
  }

  componentDidMount () {
    database
    .ref()
    .child('chants')
    .child(this.props.id)
    .once('value', (snapshot) => {
      this.setState({
        chant: snapshot.val()
      })
    })
  }

  render () {
    return this.props.children(fromJS(
      this.state.chant
    ))
  }
}
export default ChantFetcher
