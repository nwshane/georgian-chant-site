// @flow
import React, {Component} from 'react'
import type { State } from '~/data/types'
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSearch, setSearch } from '~/data/ducks/filters/search'
import MSearchBar from 'material-ui-search-bar'

type Props = {
  search: string,
  setSearch: Function
}

const noop = () => (null)

class SearchBar extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.onChange = this.onChange.bind(this)
  }

  onChange (event: {target: {value: string}}) {
    // cancel button handler calls onChange('') in material-ui-search-bar;
    // the below is a workaround until this bug gets fixed:
    // https://github.com/TeamWertarbyte/material-ui-search-bar/issues/22#issuecomment-334503605
    if (typeof event === 'string') {
      this.props.setSearch(event)
    } else {
      this.props.setSearch(event.target.value)
    }
  }

  render () {
    return (
      <MSearchBar
        onChange={this.onChange}
        onRequestSearch={noop}
        value={this.props.search}
        style={{
          maxWidth: 400
        }}
      />
    )
  }
}

const mapStateToProps = (state: State) => ({
  search: getSearch(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {setSearch},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
