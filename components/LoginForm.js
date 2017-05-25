// @flow
import { Component } from 'react'
import { auth } from '~/data/firebase'
import { Form } from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib/'
import RaisedButton from 'material-ui/RaisedButton'

type Event = {
  target: {
    value: string
  }
}

class LoginForm extends Component {
  state = {
    error: '',
    canSubmit: false
  }

  constructor () {
    super()
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
    .catch((error: {message: string}) => {
      this.setState({ error: error.message })
    })
  }

  render () {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
        >
          <FormsyText
            id='input-email'
            value=''
            name='email'
            title='Email'
            validations='isEmail'
            validationError='This is not a valid email'
            floatingLabelText='Email'
            required
          />
          <FormsyText
            id='input-password'
            value=''
            name='password'
            title='Password'
            type='password'
            floatingLabelText='Password'
            required
          />
          <RaisedButton type='submit' disabled={!this.state.canSubmit}>
            Sign In
          </RaisedButton>
        </Form>
        <div>
          {this.state.error}
        </div>
        <style jsx>{`
          div :global(form) {
            display: flex;
            flex-direction: column;
            max-width: 256px;
          }
          `}
        </style>
      </div>
    )
  }
}

export default LoginForm
