// @flow
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import NewChantForm from '~/components/Admin/NewChantForm'

// TODO: Localize
const NewChantPage = () => (
  <Layout>
    <h1>Add New Chant</h1>
    <p>
      <LocalizedLink href='/admin/chants'>
        <a>
          View All Chants
        </a>
      </LocalizedLink>
    </p>
    <NewChantForm />
  </Layout>
)

export default wrapPage(NewChantPage)
