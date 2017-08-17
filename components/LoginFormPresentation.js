// @flow
import React from 'react'
import { Form } from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib/'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  handleSubmit: Function,
  enableButton: Function,
  disableButton: Function,
  canSubmit: boolean
}

const LoginFormPresentation = (props: Props) => (
  <div>
    <Form
      onSubmit={props.handleSubmit}
      onValid={props.enableButton}
      onInvalid={props.disableButton}
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
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
      <RaisedButton type='submit' disabled={!props.canSubmit}>
        Sign In
      </RaisedButton>
    </Form>
  </div>
)
export default LoginFormPresentation
