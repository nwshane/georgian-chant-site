// @flow
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { defineMessages, injectIntl } from 'react-intl'
import Router from 'next/router'
import type { State, User } from '~/data/types'
import { getCurrentUser } from '~/data/ducks/currentUser'
import { setAppMessage } from '~/data/ducks/appMessage'
import { auth } from '~/data/firebase'
import AccountMenuPresentation from './AccountMenuPresentation'
import isAdminPage from '~/helpers/isAdminPage'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'
import type { IntlShape } from 'react-intl'

const { loggedOutMessage } = defineMessages({
  loggedOutMessage: {
    id: 'appMessage.loggedOut',
    defaultMessage: 'Successfully Logged Out'
  }
})

class AccountMenu extends Component {
  props: {
    currentUser: User,
    setAppMessage: Function,
    intl: IntlShape
  }

  constructor (props) {
    super(props)

    // necessary to stop flow from complaining
    const self: any = this
    self.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout () {
    const { intl, setAppMessage } = this.props
    auth.signOut()
    if (isAdminPage(Router.pathname)) redirectToLocalizedUrl({ pathname: '/' })
    setAppMessage(intl.formatMessage(loggedOutMessage))
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(AccountMenu))
