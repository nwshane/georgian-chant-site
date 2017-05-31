// @flow
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { auth } from '~/data/firebase'
import { setAppMessage } from '~/data/ducks/appMessage'
import LoginFormPresentation from './LoginFormPresentation'

type Props = {
  setAppMessage: Function
}

type Event = {
  target: {
    value: string
  }
}

class LoginForm extends Component {
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

  handleSubmit ({email, password}: {email: string, password: string}) {
    auth
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      this.props.setAppMessage(`Welcome, ${data.email}!`)
    })
    .catch((error: {message: string}) => {
      this.props.setAppMessage(error.message)
    })
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

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {setAppMessage},
  dispatch
)

export default connect(null, mapDispatchToProps)(LoginForm)
