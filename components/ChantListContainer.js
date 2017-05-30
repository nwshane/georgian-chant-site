// @flow
import { connect } from 'react-redux'
import ChantList from './ChantList'
import type { State } from '~/data/types'
import { getChants } from '~/data/ducks/chants'

const mapStateToProps = (state: State) => ({
  chants: getChants(state)
})

export default connect(mapStateToProps)(ChantList)
