// @flow
import { Component } from 'react'
import AccountMenuPresentation from './AccountMenuPresentation'
import { auth } from '~/data/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, State, User } from '~/data/types'

class AccountMenu extends Component {
  props: {
    setCurrentUser: Function,
    currentUser: User
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser: User) => {
      this.props.setCurrentUser(currentUser)
    })
  }

  render () {
    if (!this.props.currentUser) return null
    return (
      <AccountMenuPresentation />
    )
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (currentUser: User) => dispatch(setCurrentUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
