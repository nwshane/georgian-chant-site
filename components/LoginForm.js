import { Component } from 'react'
import { auth } from '~/data/firebase'
import { Form } from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib/'
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '~/components/tapEvents'

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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }

  enableButton () {
    this.setState({ canSubmit: true })
  }

  disableButton () {
    this.setState({ canSubmit: false })
  }

  handleSubmit (e) {
    console.log(e)

    // const { email, password } = this.state
    // auth.signInWithEmailAndPassword(email, password).catch((error) => {
    //   this.setState({ error: error.message })
    // })
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
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
            }
          `}</style>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default LoginForm
