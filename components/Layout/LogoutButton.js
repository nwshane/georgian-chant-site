import { Component } from 'react'
import { auth } from '~/data/firebase'

class LogoutButton extends Component {
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
      <button type='button' onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  }
}

export default LogoutButton
