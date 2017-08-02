// @flow
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import map from 'lodash.map'
import LocalizedLink from '~/components/LocalizedLink'
import type { Schools } from '~/data/types'
import { getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'
import { injectIntl } from 'react-intl'

type Props = {
  schools: Schools,
  intl: IntlShape
}
// TODO: Localize
const AdminSchoolsTable = ({schools, intl: {locale}}: Props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableRowColumn>
          Name
        </TableRowColumn>
        <TableRowColumn>
          Actions
        </TableRowColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {map(schools, (school, key) => (
        <TableRow>
          <TableRowColumn>
            {getTransliteratedName(school, locale)}
          </TableRowColumn>
          <TableRowColumn>
            <LocalizedLink
              as={`/admin/schools/${key}/edit`}
              href={`/admin/schools/edit?key=${key}`}
            >
              Edit
            </LocalizedLink>
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state) => ({
  schools: {
    gelati: {
      name: {
        ka: 'გელათი'
      }
    }
  }
})

export default injectIntl(connect(mapStateToProps)(AdminSchoolsTable))
