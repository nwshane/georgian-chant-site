// @flow
import React, { Component } from 'react'
import type { Dispatch } from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Router from 'next/router'
import { defineMessages, injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import { auth } from '~/data/firebase'
import { setAppMessage } from '~/data/ducks/appMessage'
import LoginFormPresentation from './LoginFormPresentation'

const { loggedInMessage } = defineMessages({
  loggedInMessage: {
    id: 'appMessage.loggedIn',
    defaultMessage: 'Welcome, {email}!'
  }
})

type Props = {
  intl: IntlShape,
  setAppMessage: Function
}

type State = {
  canSubmit: boolean
}

class LoginForm extends Component<Props, State> {
  state = {
    canSubmit: false
  }

  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
    self.enableButton = this.enableButton.bind(this)
    self.disableButton = this.disableButton.bind(this)
  }

  enableButton () {
    this.setState({ canSubmit: true })
  }

  disableButton () {
    this.setState({ canSubmit: false })
  }

  async handleSubmit ({email, password}: {email: string, password: string}) {
    const { intl, setAppMessage } = this.props

    try {
      const data = await auth.signInWithEmailAndPassword(email, password)

      Router.push('/admin', `/${intl.locale}/admin`)

      setAppMessage({
        text: intl.formatMessage(loggedInMessage, { email: data.email }),
        category: 'success'
      })
    } catch (error) {
      console.log(error)

      if (error.code === 'auth/network-request-failed') {
        setAppMessage({
          text: 'Network request failed - is your internet working?',
          category: 'error'
        })
      } else if (error.code === 'auth/wrong-password') {
        setAppMessage({
          text: error.message,
          category: 'error'
        })
      } else {
        setAppMessage({
          text: 'Could not log in - please try again later',
          category: 'error'
        })
      }
    }
  }

  render () {
    return (
      <LoginFormPresentation
        canSubmit={this.state.canSubmit}
        enableButton={this.enableButton}
        disableButton={this.disableButton}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setAppMessage},
  dispatch
)

export default injectIntl(connect(null, mapDispatchToProps)(LoginForm))
