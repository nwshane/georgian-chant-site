// @flow

import { database } from '~/data/firebase'
import type { Chant, Dispatch } from '~/data/types'
import { setAppMessage } from '~/data/ducks/appMessage'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'

// TODO: Localize
export default (chantValues: Chant) => async function (dispatch: Dispatch) {
  try {
    await database.ref().child('chants').push(chantValues)
    dispatch(setAppMessage('Chant added successfully'))
    redirectToLocalizedUrl('/admin/chants/edit')
  } catch (e) {
    dispatch(setAppMessage('Chant could not be added'))
  }
}
