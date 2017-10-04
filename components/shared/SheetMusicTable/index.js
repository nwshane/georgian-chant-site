// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import type {SheetMusic} from '~/data/types'
import {mapObjIndexed, values} from 'ramda'
import SheetMusicTableRow from './SheetMusicTableRow'

type Props = {
  sheetMusic: SheetMusic
}

const SheetMusicTable = ({sheetMusic}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableRowColumn>
          Chant School
        </TableRowColumn>
        <TableRowColumn>
          Link
        </TableRowColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {values(mapObjIndexed((sheetMusicScore, key) => (
        <SheetMusicTableRow {...{sheetMusicScore, key}} />
      ), sheetMusic))}
    </TableBody>
  </Table>
)

export default SheetMusicTable
