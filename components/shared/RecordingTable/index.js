// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import type { Recordings, UploadTask } from '~/data/types'
import { mapObjIndexed, values } from 'ramda'
import RecordingTableRow from './RecordingTableRow'
import UploadTaskPercentage from './UploadTaskPercentage'

type Props = {
  recordings: Recordings,
  uploadTasks?: {
    [string]: UploadTask
  },
  removeUploadTask?: Function,
  hide?: Array<string>
}

const RecordingTable = ({hide, recordings, uploadTasks, removeUploadTask}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        {
          hide && hide.includes('chantName')
            ? null
            : (
              <TableRowColumn>
                Chant Name
              </TableRowColumn>
            )
        }
        <TableRowColumn>
          Choir
        </TableRowColumn>
        <TableRowColumn>
          School
        </TableRowColumn>
        <TableRowColumn>
          Recording
        </TableRowColumn>
        {
          hide && hide.includes('actions')
            ? null
            : (
              <TableRowColumn>
                Delete
              </TableRowColumn>
            )
        }
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {values(mapObjIndexed((recording, key) => {
        return <RecordingTableRow recordingKey={key} {...{hide, recording, key}} />
      }, recordings))}
      {
        uploadTasks && removeUploadTask
          ? (
            values(mapObjIndexed(
              (uploadTask, uploadTaskKey) => (
                <TableRow key={uploadTaskKey}>
                  <TableRowColumn>
                    Loading New File: {
                      <UploadTaskPercentage
                        {...{uploadTaskKey, uploadTask, removeUploadTask}}
                      />
                    }
                  </TableRowColumn>
                  <TableRowColumn />
                </TableRow>
              ),
              uploadTasks
            )
            ))
          : null
      }
    </TableBody>
  </Table>
)

export default RecordingTable
