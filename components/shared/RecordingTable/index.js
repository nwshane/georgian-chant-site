// @flow
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import type { Recordings, UploadTask } from '~/data/types'
import map from 'lodash.map'
import RecordingTableRow from './RecordingTableRow'
import UploadTaskPercentage from './UploadTaskPercentage'

type Props = {
  recordings: Recordings,
  uploadTasks?: {
    [string]: UploadTask
  },
  removeUploadTask?: Function,
  hide: Array<string>
}

const RecordingTable = ({hide, recordings, uploadTasks, removeUploadTask}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        {
          hide.includes('chantName')
            ? null
            : (
              <TableRowColumn>
                Chant Name
              </TableRowColumn>
            )
        }
        <TableRowColumn>
          School
        </TableRowColumn>
        <TableRowColumn>
          Recording
        </TableRowColumn>
        {
          hide.includes('actions')
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
      {map(recordings, (recording, key) => (
        <RecordingTableRow recordingKey={key} {...{hide, recording, key}} />
      ))}
      {
        uploadTasks && removeUploadTask
          ? null
          : (
            map(
              uploadTasks,
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
              )
            )
          )
      }
    </TableBody>
  </Table>
)

export default RecordingTable
