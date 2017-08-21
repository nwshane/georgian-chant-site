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

class SearchBar extends Component<Props> {
  constructor () {
    super()
    const self: any = this
    self.onChange = this.onChange.bind(this)
  }

  onChange (event: {target: {value: string}}) {
    this.props.setSearch(event.target.value)
  }

  render () {
    return (
      <MSearchBar
        onChange={this.onChange}
        onRequestSearch={() => console.log('onRequestSearch')}
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
