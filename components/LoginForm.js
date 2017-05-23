import { Component } from 'react'
import { auth } from '~/data/firebase'

type Event = {
  target: {
    value: string
  }
}

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    const { email, password } = this.state
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      this.setState({ error: error.message })
    })
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='email'
            id='email-input'
            value={this.state.email}
            onChange={(e: Event) => this.setState({email: e.target.value})}
          />
          <input
            type='password'
            id='password-input'
            value={this.state.password}
            onChange={(e: Event) => this.setState({password: e.target.value})}
          />
          <button type='submit' onClick={this.handleSubmit}>
            Sign In
          </button>
        </form>
        <div>
          {this.state.error}
        </div>
      </div>
    )
  }
}

export default LoginForm
