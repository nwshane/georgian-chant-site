// @flow
import { TableRow, TableRowColumn } from 'material-ui/Table'

const UploadTaskRowPresentation = ({percentLoaded}: {percentLoaded: number}) => (
  <TableRow>
    <TableRowColumn>
      Loading New File: {percentLoaded}%
    </TableRowColumn>
    <TableRowColumn />
  </TableRow>
)

export default UploadTaskRowPresentation
