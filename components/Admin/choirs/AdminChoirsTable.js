// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { map, values } from 'ramda'
import type { Choirs } from '~/data/types'
import { getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'
import { injectIntl } from 'react-intl'
import { getChoirs } from '~/data/ducks/choirs'

type Props = {
  choirs: Choirs,
  intl: IntlShape
}
// TODO: Localize
const AdminChoirsTable = ({choirs, intl: {locale}}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableRowColumn>
          Name
        </TableRowColumn>
        <TableRowColumn>
          Actions
        </TableRowColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {map((school) => (
        <TableRow>
          <TableRowColumn>
            {getTransliteratedName(locale, school)}
          </TableRowColumn>
          <TableRowColumn>
            None Available
          </TableRowColumn>
        </TableRow>
      ), values(choirs))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state) => ({
  choirs: getChoirs(state)
})

export default injectIntl(connect(mapStateToProps)(AdminChoirsTable))
