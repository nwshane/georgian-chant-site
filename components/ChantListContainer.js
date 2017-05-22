// @flow
import { Component } from 'react'
import ChantList from './ChantList'
import type { Chants } from '~/data/types'
import { fromJS } from 'immutable'
import { database } from '~/data/firebase'

class ChantListContainer extends Component {
  state: {
    chants: Chants
  }

  constructor () {
    super()
    this.state = {
      chants: fromJS({})
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
