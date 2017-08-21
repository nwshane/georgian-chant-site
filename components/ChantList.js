// @flow
import { connect } from 'react-redux'
import ChantListPresentation from './ChantListPresentation'
import type { State } from '~/data/types'
import { getChants } from '~/data/ducks/chants'

const mapStateToProps = (state: State) => ({
  chants: getChants(state)
})

export default connect(mapStateToProps)(ChantListPresentation)
