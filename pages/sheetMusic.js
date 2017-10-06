// @flow
import React, { Component } from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import type {SheetMusic} from '~/data/types'
import {getSheetMusic} from '~/data/ducks/sheetMusic'
import fetchSheetMusic from '~/data/thunks/sheetMusic/fetchSheetMusic'
import SheetMusicTable from '~/components/shared/SheetMusicTable'

type Props = {
  sheetMusic: SheetMusic
}

class SheetMusicPage extends Component<Props> {
  static async getInitialProps ({store}) {
    await store.dispatch(fetchSheetMusic())
    return {
      sheetMusic: getSheetMusic(store.getState())
    }
  }

  render () {
    return (
      <Layout>
        <SheetMusicTable hide={['actions']} sheetMusic={this.props.sheetMusic} />
      </Layout>
    )
  }
}

export default wrapPage(SheetMusicPage)
