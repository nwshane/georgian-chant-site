// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import type {SheetMusic} from '~/data/types'
import {mapObjIndexed, values} from 'ramda'
import SheetMusicTableRow from './SheetMusicTableRow'

type Props = {
  hide?: Array<string>,
  sheetMusic: SheetMusic
}

const SheetMusicTable = ({hide, sheetMusic}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        {
          hide && hide.includes('chant')
            ? null
            : (
              <TableRowColumn>
                Chant
              </TableRowColumn>
            )
        }
        <TableRowColumn>
          School
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
        <SheetMusicTableRow {...{sheetMusicScore, key, hide}} />
      ), sheetMusic))}
    </TableBody>
  </Table>
)

export default SheetMusicTable
