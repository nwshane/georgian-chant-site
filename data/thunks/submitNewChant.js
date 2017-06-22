// @flow

import { database } from '~/data/firebase'
import type { Chant, Dispatch } from '~/data/types'
import { setAppMessage } from '~/data/ducks/appMessage'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'
import convertNameToSlug from '~/helpers/convertNameToSlug'

// TODO: Localize
export default (chantValues: Chant) => async function (dispatch: Dispatch) {
  const newChantValues = {
    ...chantValues,
    slug: convertNameToSlug(chantValues.name.ka)
  }

  try {
    await database.ref().child('chants').child(newChantValues.slug).set(newChantValues)
    dispatch(setAppMessage('Chant added successfully', 'success'))
    redirectToLocalizedUrl(
      {
        pathname: '/admin/chants/edit',
        query: { slug: newChantValues.slug }
      },
      { pathname: `/admin/chants/${newChantValues.slug}/edit` }
  )
  } catch (e) {
    dispatch(setAppMessage('Chant could not be added', 'error'))
  }
}
