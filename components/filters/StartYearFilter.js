// @flow
import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux'
import type {State, Dispatch} from '~/data/types'
import {bindActionCreators} from 'redux'
import {setStartYear, getStartYear} from '~/data/ducks/filters/startYear'

type Props = {
  startYear: number,
  setStartYear: Function
}

class StartYearFilter extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.handleChange = self.handleChange.bind(self)
  }

  handleChange (event: {target: {value: number}}) {
    this.props.setStartYear(event.target.value)
  }

  render () {
    return (
      <TextField
        name='start-year-filter'
        value={this.props.startYear}
        onChange={this.handleChange}
        floatingLabelText='Start Year'
        type='number'
      />
    )
  }
}

const mapStateToProps = (state: State) => ({
  startYear: getStartYear(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setStartYear},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(StartYearFilter)
