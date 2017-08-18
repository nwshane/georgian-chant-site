// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { map, values } from 'ramda'
import type { Schools } from '~/data/types'
import { getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'
import { injectIntl } from 'react-intl'
import { getSchools } from '~/data/ducks/schools'

type Props = {
  schools: Schools,
  intl: IntlShape
}
// TODO: Localize
const AdminSchoolsTable = ({schools, intl: {locale}}: Props) => (
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
      ), values(schools))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state) => ({
  schools: getSchools(state)
})

export default injectIntl(connect(mapStateToProps)(AdminSchoolsTable))
