// @flow
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'

const EditChantPage = () => (
  <Layout>
    <p>
      <LocalizedLink href='/admin/chants'>
        <a>
          View All Chants
        </a>
      </LocalizedLink>
    </p>
    <p>
      Here you can edit the chant
    </p>
  </Layout>
)

export default wrapPage(EditChantPage)
