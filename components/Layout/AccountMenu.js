// @flow
import { Component } from 'react'
import AccountMenuPresentation from './AccountMenuPresentation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { State, User } from '~/data/types'
import { getCurrentUser } from '~/data/ducks/currentUser'
import { setAppMessage } from '~/data/ducks/appMessage'
import { auth } from '~/data/firebase'

class AccountMenu extends Component {
  props: {
    currentUser: User,
    setAppMessage: Function
  }

  constructor(props) {
    super(props)

    // necessary to stop flow from complaining
    const self: any = this
    self.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout () {
    auth.signOut()
    this.props.setAppMessage('Successfully Logged Out')
  }

  render () {
    if (!this.props.currentUser) return null
    return (
      <AccountMenuPresentation handleSignout={this.handleSignout} />
    )
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {setAppMessage},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
