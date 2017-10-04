// @flow
import React, {Component} from 'react'
import {Range} from 'rc-slider'
import {connect} from 'react-redux'
import type {State, Dispatch} from '~/data/types'
import {bindActionCreators} from 'redux'
import {setStartYear, getStartYear} from '~/data/ducks/filters/startYear'
import RcFilterCss from './RcFilterCss'

type Props = {
  startYear: number,
  setStartYear: Function,
  minimumYear: number,
  maximumYear: number
}

class StartYearFilter extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.handleChange = self.handleChange.bind(self)
  }

  handleChange (values) {
    this.props.setStartYear(values[0])
  }

  render () {
    const {startYear, minimumYear, maximumYear} = this.props
    return (
      <div>
        <Range
          value={[startYear, maximumYear]}
          defaultValue={[minimumYear, maximumYear]}
          onChange={this.handleChange}
          min={minimumYear}
          max={maximumYear}
          step={1}
        />
        <RcFilterCss />
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  startYear: getStartYear(state),
  minimumYear: 1921,
  maximumYear: 2021
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setStartYear},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(StartYearFilter)
