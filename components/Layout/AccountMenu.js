// @flow
import { Component } from 'react'
import AccountMenuPresentation from './AccountMenuPresentation'
import { connect } from 'react-redux'
import type { State, User } from '~/data/types'
import { getCurrentUser } from '~/data/ducks/currentUser'

class AccountMenu extends Component {
  props: {
    currentUser: User
  }

  render () {
    if (!this.props.currentUser) return null
    return (
      <AccountMenuPresentation />
    )
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps)(AccountMenu)
