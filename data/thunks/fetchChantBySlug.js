// @flow
import { database } from '~/data/firebase'
import { setChant } from '~/data/ducks/chants'
import type { Dispatch } from '~/data/types'

export default (slug: string) => (dispatch: Dispatch) => (
  database
  .ref()
  .child('chants')
  .child(slug)
  .once('value', (chant) => {
    dispatch(setChant({
      chant: chant.val(),
      key: slug
    }))
  })
)
