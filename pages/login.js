import PageWithIntl from '~/components/PageWithIntl'
import Layout from '~/components/Layout/'
import LoginForm from '~/components/LoginForm'

const LoginPage = () => (
  <Layout>
    <LoginForm />
  </Layout>
)

export default PageWithIntl(LoginPage)
