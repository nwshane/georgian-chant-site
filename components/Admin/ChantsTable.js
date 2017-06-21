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
    >
      <TableRow>
        <TableRowColumn>
          Name
        </TableRowColumn>
        <TableRowColumn>
          Edit
        </TableRowColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {map(chants, (chant, key) => (
        <TableRow key={key}>
          <TableRowColumn>
            <ChantLink chant={chant} />
          </TableRowColumn>
          <TableRowColumn>
            <LocalizedLink
              as={`/admin/chants/${chant.slug}/edit`}
              href={`/admin/chants/edit?slug=${chant.slug}`}
            >
              <a>
                Edit Link
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
