// @flow
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ChantList from './ChantList'
import type { Chants, State } from '~/data/types'
import { setChants } from '~/data/ducks/chants'
import { database } from '~/data/firebase'

class ChantListContainer extends Component {
  props: {
    chants: Chants,
    setChants: Function
  }

  componentDidMount () {
    database.ref().child('chants').once('value', (snapshot) => {
      this.props.setChants(snapshot.val())
    })
  }

  render () {
    const { chants } = this.props
    return (
      <ChantList chants={chants} />
    )
  }
}

const mapStateToProps = (state: State) => ({
  chants: state.chants
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {setChants},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ChantListContainer)
