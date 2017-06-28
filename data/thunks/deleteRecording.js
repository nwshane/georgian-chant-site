// @flow
import type { Recording } from '~/data/types'
import { database } from '~/data/firebase'
import storage from '~/data/firebaseStorage'
import { setAppMessage } from '~/data/ducks/appMessage'

export default (recording: Recording, key: string) => async function (dispatch: Function) {
  try {
    await database
    .ref()
    .child('chants')
    .child(recording.chantSlug)
    .child('recordings')
    .child(key)
    .remove()

    await database
    .ref()
    .child('recordings')
    .child(key)
    .remove()

    await storage()
    .ref()
    .child('recordings')
    .child(key)
    .delete()

    dispatch(setAppMessage('Successfully deleted recording'))
  } catch (e) {
    dispatch(setAppMessage('Failed to delete recording'))
  }
}
