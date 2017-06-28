// @flow
import { database } from '~/data/firebase'
import { mergeChants } from '~/data/ducks/chants'
import type { Dispatch } from '~/data/types'
import normalizeChants from '~/data/normalizeChants'

export default (slug: string) => (dispatch: Dispatch) => (
  database
  .ref()
  .child('chants')
  .child(slug)
  .once('value', (chant) => {
    const chants = {}
    chants[slug] = chant.val()

    dispatch(mergeChants(normalizeChants(chants)))
  })
)
