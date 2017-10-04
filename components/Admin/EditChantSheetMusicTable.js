// @flow
import React from 'react'
import {connect} from 'react-redux'
import {getSheetMusicForChant} from '~/data/ducks/sheetMusic'
import type {SheetMusic, State, Chant} from '~/data/types'
import SheetMusicTable from '~/components/shared/SheetMusicTable'

type Props = {
  sheetMusic: SheetMusic
}

const EditChantSheetMusicTable = ({sheetMusic}: Props) => (
  <div>
    <h3>Sheet Music for this Chant</h3>
    <SheetMusicTable sheetMusic={sheetMusic} />
  </div>
)

const mapStateToProps = (state: State, {chant}: {chant: Chant}) => ({
  sheetMusic: getSheetMusicForChant(chant.slug, state)
})

export default connect(mapStateToProps)(EditChantSheetMusicTable)
