// @flow
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import LoginForm from '~/components/LoginForm'

const LoginPage = () => (
  <Layout>
    <LoginForm />
  </Layout>
)

export default wrapPage(LoginPage)
