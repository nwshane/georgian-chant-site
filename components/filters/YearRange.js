// @flow
import React, {Component} from 'react'
import {Range} from 'rc-slider'
import {connect} from 'react-redux'
import type {State, Dispatch} from '~/data/types'
import {bindActionCreators} from 'redux'
import {setStartYear, getStartYear} from '~/data/ducks/filters/startYear'
import {setEndYear, getEndYear} from '~/data/ducks/filters/endYear'
import {getMinimumRecordingsYear, getMaximumRecordingsYear} from '~/data/ducks/recordings'
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

  render () {
    const {startYear, endYear, minimumYear, maximumYear} = this.props
    return (
      <div>
        <div>
          Selected Years: {startYear} - {endYear}
        </div>
        <Range
          value={[startYear, endYear]}
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

const mapStateToProps = (state: State) => ({
  startYear: getStartYear(state),
  endYear: getEndYear(state),
  minimumYear: getMinimumRecordingsYear(state),
  maximumYear: getMaximumRecordingsYear(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setStartYear, setEndYear},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(YearRange)
