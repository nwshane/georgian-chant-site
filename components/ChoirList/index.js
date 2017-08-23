// @flow
import ChoirListPresentation from './ChoirListPresentation'
import type { State } from '~/data/types'
import { getChoirs } from '~/data/ducks/choirs'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

const mapStateToProps = (state: State) => ({
  choirs: getChoirs(state)
})

export default injectIntl(connect(mapStateToProps)(ChoirListPresentation))
