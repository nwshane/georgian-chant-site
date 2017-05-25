import { Component } from 'react'
import AccountMenuPresentation from './AccountMenuPresentation'
import { auth } from '~/data/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from '~/data/ducks/currentUser'

class AccountMenu extends Component {
  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
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

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
