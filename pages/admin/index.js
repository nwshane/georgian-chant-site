// @flow
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'

const AdminIndexPage = () => (
  <Layout>
    <h1>Admin Panel</h1>
    <ul>
      <li>
        <LocalizedLink
          href='/admin/chants'
        >
          <a>
            Manage Chants
          </a>
        </LocalizedLink>
      </li>
    </ul>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </Layout>
)

export default wrapPage(AdminIndexPage)