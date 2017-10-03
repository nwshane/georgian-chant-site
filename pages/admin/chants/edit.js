// @flow
import React, { Component } from 'react'
import Error from '~/components/Error'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import type { Chant } from '~/data/types'
import { getChantBySlug } from '~/data/ducks/chants'
import fetchChantBySlug from '~/data/thunks/chants/fetchBySlug'
import ChantForm from '~/components/Admin/ChantForm'
import RecordingsForm from '~/components/Admin/RecordingsForm/'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import ChantLink from '~/components/ChantLink'
import { Tabs, Tab } from 'material-ui/Tabs'
import ChantLocalizedName from '~/components/chant/ChantLocalizedName'
import NewSheetMusicForm from '~/components/Admin/NewSheetMusicForm'
import SheetMusicTable from '~/components/shared/SheetMusicTable'

type Props = {
  chant: Chant
}

// TODO: Localize
class EditChantPage extends Component<Props> {
  static async getInitialProps ({store, query: {slug}}) {
    await store.dispatch(fetchChantBySlug(slug))
    await store.dispatch(fetchRecordings())
    return { chant: getChantBySlug(store.getState(), slug) }
  }

  render () {
    const { chant } = this.props

    if (!chant) return <Error statusCode={404} />

    return (
      <Layout>
        <h1>
          Edit Chant: <ChantLocalizedName chant={chant} />
        </h1>
        <p>
          <LocalizedLink href='/admin/chants'>
            <a>
              View All Chants
            </a>
          </LocalizedLink>
        </p>
        <ChantLink chantSlug={chant.slug} text="View this chant's page" />
        <Tabs
          style={{
            marginTop: '20px'
          }}
        >
          <Tab label='Chant Info'>
            <ChantForm chant={chant} />
          </Tab>
          <Tab label='Recordings'>
            <RecordingsForm chant={chant} />
          </Tab>
          <Tab label='Sheet Music'>
            <section>
              <h3>Sheet Music for this Chant</h3>
              <SheetMusicTable />
              <h3>Upload New Sheet Music</h3>
              <NewSheetMusicForm chant={chant} />
            </section>
          </Tab>
        </Tabs>
      </Layout>
    )
  }
}

export default wrapPage(EditChantPage)
