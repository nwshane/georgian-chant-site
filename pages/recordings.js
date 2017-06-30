// @flow
import { Component } from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import ChantLink from '~/components/ChantLink'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import { getRecordings } from '~/data/ducks/recordings'
import map from 'lodash.map'

class RecordingsPage extends Component {
  static async getInitialProps ({store}) {
    await store.dispatch(fetchRecordings())
    return {
      recordings: getRecordings(store.getState())
    }
  }

  render () {
    const { recordings } = this.props
    return (
      <Layout>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>
                Chant Name
              </TableRowColumn>
              <TableRowColumn>
                Recording
              </TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {map(recordings, (recording, key) => (
              <TableRow {...{key}}>
                <TableRowColumn>
                  <ChantLink chantSlug={recording.chantSlug} />
                </TableRowColumn>
                <TableRowColumn>
                  <audio controls src={recording.url} />
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Layout>
    )
  }
}

export default wrapPage(RecordingsPage)
