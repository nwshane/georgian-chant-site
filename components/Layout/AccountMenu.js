import { Component } from 'react'
import AccountMenuPresentation from './AccountMenuPresentation'
import { auth } from '~/data/firebase'

class AccountMenu extends Component {
  state = {
    userSignedIn: false
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({
        userSignedIn: currentUser != null
      })
    })
  }

  render () {
    if (!this.state.userSignedIn) return null
    return (
      <AccountMenuPresentation />
    )
  }
}

export default AccountMenu
