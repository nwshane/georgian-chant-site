// @flow
import { Component } from 'react'
import type { ServerContext } from '~/data/types'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import LoginForm from '~/components/LoginForm'
import { getCurrentUser } from '~/data/ducks/currentUser'
import { setAppMessage } from '~/data/ducks/appMessage'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'

class LoginPage extends Component {
  static async getInitialProps (context: ServerContext) {
    const { store } = context
    if (getCurrentUser(store.getState())) {
      store.dispatch(setAppMessage("You're already logged in!"))
      redirectToLocalizedUrl('/', context)
    }
  }

  render () {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    )
  }
}

export default wrapPage(LoginPage)
