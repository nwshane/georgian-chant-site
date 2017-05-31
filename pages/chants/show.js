// @flow
import { Component } from 'react'
import Error from '~/components/Error'
import type { Chant, State } from '~/data/types'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import { addChant, getChantBySlug } from '~/data/ducks/chants'
import { database } from '~/data/firebase'

type InitialPropsContext = {
  query: {
    slug: string
  },
  store: {
    dispatch: Function,
    getState: Function
  }
}

type Props = {
  slug: string,
  chant: ?Chant
}

class ChantShowPage extends Component {
  props: Props

  static async getInitialProps ({query: {slug}, store}: InitialPropsContext) {
    await database
    .ref()
    .child('chants')
    .orderByChild('slug')
    .equalTo(slug)
    .once('value', (snapshot) => {
      snapshot.forEach((chant) => {
        store.dispatch(addChant({
          chant: chant.val(),
          key: chant.getKey()
        }))
      })
    })

    return { slug, chant: getChantBySlug(store.getState(), slug) }
  }

  render () {
    const { chant } = this.props

    if (!chant) return <Error statusCode={404} />

    return (
      <Layout>
        {chant && <div>
          <h1>{chant.name && chant.name.ka}</h1>
          <p>{chant.text && chant.text.ka}</p>
        </div>}
      </Layout>
    )
  }
}

export default wrapPage(ChantShowPage)
