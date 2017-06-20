// @flow
import { Component } from 'react'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'

class EditChantPage extends Component {
  static async getInitialProps ({query: {slug}}) {
    return { slug }
  }

  render () {
    return (
      <Layout>
        <p>
          <LocalizedLink href='/admin/chants'>
            <a>
              View All Chants
            </a>
          </LocalizedLink>
        </p>
        <p>
          chant slug: {this.props.slug}
        </p>
      </Layout>
    )
  }
}

export default wrapPage(EditChantPage)
