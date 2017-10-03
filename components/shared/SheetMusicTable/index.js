// @flow
import React from 'react'
import type {SheetMusic} from '~/data/types'
import {getSheetMusic} from '~/data/ducks/sheetMusic'
import {mapObjIndexed, values} from 'ramda'
import {connect} from 'react-redux'

type Props = {
  sheetMusic: SheetMusic
}

const SheetMusicTable = ({sheetMusic}: Props) => (
  <ul>
    {values(mapObjIndexed((sheetMusicScore, key) => (
      <li key={key}>
        {sheetMusicScore.url}
      </li>
    ), sheetMusic))}
  </ul>
)

const mapStateToProps = (state) => ({
  sheetMusic: getSheetMusic(state)
})

export default connect(mapStateToProps)(SheetMusicTable)
