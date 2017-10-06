// @flow
import React, {Component} from 'react'
import {compose, filter, values} from 'ramda'
import {Range} from 'rc-slider'
import {connect} from 'react-redux'
import type {Recordings, Recording, State, Dispatch} from '~/data/types'
import {bindActionCreators} from 'redux'
import {setStartYear, getStartYear} from '~/data/ducks/filters/startYear'
import {setEndYear, getEndYear} from '~/data/ducks/filters/endYear'
import RcFilterCss from './RcFilterCss'

type Props = {
  startYear: number,
  endYear: number,
  setStartYear: Function,
  setEndYear: Function,
  minimumYear: number,
  maximumYear: number
}

const getMarks = (minimumYear, maximumYear) => {
  const obj = {}
  obj[minimumYear] = minimumYear
  obj[maximumYear] = maximumYear
  return obj
}

const getMinimumRecordingsYear = (recordings: Array<Recording>): ?number => (
  recordings.reduce((minYear, recording) => (
    recording.year < minYear ? recording.year : minYear
  ), recordings[0].year)
)

const getMaximumRecordingsYear = (recordings: Array<Recording>): number => (
  recordings.reduce((maxYear, recording) => (
    recording.year > maxYear ? recording.year : maxYear
  ), recordings[0].year)
)

class YearRange extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.handleChange = self.handleChange.bind(self)
  }

  handleChange (values) {
    this.props.setStartYear(values[0])
    this.props.setEndYear(values[1])
  }

  componentDidMount () {
    this.props.setStartYear(null)
    this.props.setEndYear(null)
  }

  render () {
    const {startYear, endYear, minimumYear, maximumYear} = this.props

    if (minimumYear === maximumYear) return null
    
    return (
      <div>
        {
          startYear && endYear
            ? (
              <div>
                Selected Years: {startYear} - {endYear}
              </div>
            )
            : (
              <div>
                Select Years:
              </div>
            )
        }
        <Range
          value={[startYear || minimumYear, endYear || maximumYear]}
          defaultValue={[minimumYear, maximumYear]}
          onChange={this.handleChange}
          min={minimumYear}
          max={maximumYear}
          step={1}
          marks={getMarks(minimumYear, maximumYear)}
        />
        <RcFilterCss />
        <style jsx>{`
          div {
            max-width: 300px;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state: State, {recordings}: {recordings: Recordings}) => {
  const recordingsWithYear = compose(
    filter((recording) => (!!recording.year)),
    values
  )(recordings)

  return {
    startYear: getStartYear(state),
    endYear: getEndYear(state),
    minimumYear: getMinimumRecordingsYear(recordingsWithYear),
    maximumYear: getMaximumRecordingsYear(recordingsWithYear)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setStartYear, setEndYear},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(YearRange)
