import { Component } from 'react'
import ChantList from './ChantList'
// import chantsJson from '~/data/chants'
import { fromJS } from 'immutable'
import { database } from '~/data/firebase'

class ChantListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chants: fromJS([])
    }
  }

  componentDidMount () {
    database.ref().child('chants').once('value', (snapshot) => {
      this.setState({
        chants: fromJS(snapshot.val())
      })
    })
  }

  render () {
    return (
      <ChantList chants={this.state.chants} />
    )
  }
}

export default ChantListContainer
