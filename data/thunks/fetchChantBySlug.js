// @flow
import { database } from '~/data/firebase'
import { addChant } from '~/data/ducks/chants'
import type { Dispatch } from '~/data/types'

export default (slug: string) => (dispatch: Dispatch) => (
  database
  .ref()
  .child('chants')
  .orderByChild('slug')
  .equalTo(slug)
  .once('value', (snapshot) => {
    snapshot.forEach((chant) => {
      dispatch(addChant({
        chant: chant.val(),
        key: chant.getKey()
      }))
    })
  })
)
