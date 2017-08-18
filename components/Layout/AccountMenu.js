// @flow
import React, { Component } from 'react'
import type { Dispatch } from 'redux'
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

type Props = {
  currentUser: User,
  setAppMessage: Function,
  intl: IntlShape
}

class AccountMenu extends Component<Props> {
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
    setAppMessage({
      text: intl.formatMessage(loggedOutMessage),
      category: 'neutral'
    })
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

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setAppMessage},
  dispatch
)

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(AccountMenu))
