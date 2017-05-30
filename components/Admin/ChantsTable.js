// @flow
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import map from 'lodash.map'
import { connect } from 'react-redux'
import { getChants } from '~/data/ducks/chants'
import type { Chants, State } from '~/data/types'

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
          <TableRowColumn>{chant.name.ka}</TableRowColumn>
          <TableRowColumn>Edit Link</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state: State) => ({
  chants: getChants(state)
})

export default connect(mapStateToProps)(AdminChantsTable)
