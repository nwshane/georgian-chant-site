// @flow
import { connect } from 'react-redux'
import ChantListPresentation from './ChantListPresentation'
import { compose, curry, filter } from 'ramda'
import type { Chants, State } from '~/data/types'
import { getChants } from '~/data/ducks/chants'
import { getSearch } from '~/data/ducks/filters/search'
import latinizeGeorgian from 'latinize-georgian'

const filterBySearch = curry((search: string, chants: Chants): Chants => (
  filter((chant) => (
    (!!chant.name.ka && chant.name.ka.includes(search)) ||
      (!!chant.name.en && chant.name.en.includes(search)) ||
      (!!chant.text.ka && chant.text.ka.includes(search)) ||
      (!!chant.text.en && chant.text.en.includes(search)) ||
      (!!chant.text.ka && latinizeGeorgian(chant.text.ka).includes(search)) ||
      (!!chant.name.ka && latinizeGeorgian(chant.name.ka).includes(search))
    ), chants)
  )
)

const mapStateToProps = (state: State) => ({
  chants: compose(
    filterBySearch(getSearch(state)),
    getChants
  )(state)
})

export default connect(mapStateToProps)(ChantListPresentation)
