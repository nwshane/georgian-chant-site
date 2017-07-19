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

  const { slug } = newChantValues
  const chantRef = database.ref().child('chants').child(slug)

  try {
    const chantSnapshot = await chantRef.once('value')
    if (chantSnapshot.exists()) {
      throw new Error('Chant with this name already exists; please choose a different name.')
    }

    await chantRef.set(newChantValues)

    dispatch(setAppMessage({
      text: 'Chant added successfully',
      category: 'success'
    }))

    redirectToLocalizedUrl(
      {
        pathname: '/admin/chants/edit',
        query: { slug: slug }
      },
      { pathname: `/admin/chants/${slug}/edit` }
  )
  } catch (e) {
    const message = e.message || 'Chant could not be added'

    dispatch(setAppMessage({
      text: message,
      category: 'error'
    }))
  }
}
