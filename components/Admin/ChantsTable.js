// @flow
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import LocalizedLink from '~/components/LocalizedLink'
import ChantLink from '~/components/ChantLink'
import map from 'lodash.map'
import { connect } from 'react-redux'
import { getChants } from '~/data/ducks/chants'
import type { Chants, State } from '~/data/types'

// TODO: Localize
const AdminChantsTable = ({chants}: {chants: Chants}) => (
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
      {map(chants, (chant, slug) => (
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
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state: State) => ({
  chants: getChants(state)
})

export default connect(mapStateToProps)(AdminChantsTable)
