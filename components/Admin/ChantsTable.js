// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import LocalizedLink from '~/components/LocalizedLink'
import ChantLink from '~/components/ChantLink'
import { mapObjIndexed, values } from 'ramda'
import { connect } from 'react-redux'
import { getChants } from '~/data/ducks/chants'
import type { Chants, State } from '~/data/types'

type Props = {
  chants: Chants
}

// TODO: Localize
const AdminChantsTable = ({chants}: Props) => (
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
      {values(mapObjIndexed((chant, slug) => (
        <TableRow key={slug}>
          <TableRowColumn>
            <ChantLink chantSlug={slug} />
          </TableRowColumn>
          <TableRowColumn>
            <LocalizedLink
              as={`/admin/chants/${slug}/edit`}
              href={`/admin/chants/edit?slug=${slug}`}
            >
              <a>
                Edit Chant
              </a>
            </LocalizedLink>
          </TableRowColumn>
        </TableRow>
      ), chants))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state: State) => ({
  chants: getChants(state)
})

export default connect(mapStateToProps)(AdminChantsTable)
