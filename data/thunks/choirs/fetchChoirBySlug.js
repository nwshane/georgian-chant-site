// @flow
import { database } from '~/data/firebase'
import { mergeChoirs } from '~/data/ducks/choirs'
import type { Dispatch } from '~/data/types'

export default (slug: string) => (dispatch: Dispatch) => (
  database
  .ref()
  .child('choirs')
  .child(slug)
  .once('value', (choir) => {
    const choirs = {}
    choirs[slug] = choir.val()

    dispatch(mergeChoirs(choirs))
  })
)
