// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { IntlShape } from 'react-intl'
import { injectIntl } from 'react-intl'
import { compose, curry, filter, mapObjIndexed, values } from 'ramda'
import type { Chants } from '~/data/types'
import { getChants } from '~/data/ducks/chants'
import { getSearch } from '~/data/ducks/filters/search'
import { getTransliteratedName } from '~/data/getters'

type Props = {
  chants: Chants,
  intl: IntlShape
}

const SearchResults = ({chants, intl: {locale}}: Props) => (
  <section>
    {
      values(mapObjIndexed(
        (chant, key) => (
          <div {...{key}}>
            <h2>
              {getTransliteratedName(locale, chant)}
            </h2>
          </div>
        ),
        chants
      ))
    }
  </section>
)

const filterBySearch = curry((search: string, chants: Chants): Chants => (
  filter((chant) => (
    chant.name.ka.includes(search)
  ), chants)
))

const mapStateToProps = (state) => ({
  chants: compose(
    filterBySearch(getSearch(state)),
    getChants
  )(state)
  // chants: log(filterBySearch(getSearch(state), getChants(state)))
})

export default injectIntl(connect(mapStateToProps)(SearchResults))
