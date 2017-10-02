// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import LocalizedLink from '~/components/LocalizedLink'
import { connect } from 'react-redux'
import { mapObjIndexed, values } from 'ramda'
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
      {values(mapObjIndexed((choir, slug) => (
        <TableRow key={slug}>
          <TableRowColumn>
            <LocalizedLink
              href={`/choirs/show?slug=${slug}`}
              as={`/choirs/${slug}`}
            >
              <a>
                {getTransliteratedName(locale, choir)}
              </a>
            </LocalizedLink>
          </TableRowColumn>
          <TableRowColumn>
            <LocalizedLink
              as={`/admin/choirs/${slug}/edit`}
              href={`/admin/choirs/edit?slug=${slug}`}
            >
              <a>
                Edit Choir
              </a>
            </LocalizedLink>
          </TableRowColumn>
        </TableRow>
      ), choirs))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state) => ({
  choirs: getChoirs(state)
})

export default injectIntl(connect(mapStateToProps)(AdminChoirsTable))
