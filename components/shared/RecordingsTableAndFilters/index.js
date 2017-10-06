// @flow
import React from 'react'
import type { Recordings } from '~/data/types'
import YearRange from './YearRange.js'
import FilteredRecordingsTable from './FilteredRecordingsTable'

type Props = {
  hide: Array<string>,
  recordings: Recordings
}

const RecordingsTableAndFilters = ({hide, recordings}: Props) => (
  <div>
    <YearRange recordings={recordings} />
    <FilteredRecordingsTable {...{hide, recordings}} />
  </div>
)
export default RecordingsTableAndFilters
