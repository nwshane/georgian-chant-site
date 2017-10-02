// @flow

import { database } from '~/data/firebase'
import type { Choir, Dispatch } from '~/data/types'
import { setAppMessage } from '~/data/ducks/appMessage'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'
import convertNameToSlug from '~/helpers/convertNameToSlug'

// TODO: Localize
export default (choirValues: Choir) => async function (dispatch: Dispatch) {
  const newChoirValues = {
    ...choirValues,
    slug: convertNameToSlug(choirValues.name.ka)
  }

  const { slug } = newChoirValues
  const choirRef = database.ref().child('choirs').child(slug)

  try {
    const choirSnapshot = await choirRef.once('value')
    if (choirSnapshot.exists()) {
      throw new Error('Choir with this name already exists; please choose a different name.')
    }

    await choirRef.set(newChoirValues)

    dispatch(setAppMessage({
      text: 'Choir added successfully',
      category: 'success'
    }))

    redirectToLocalizedUrl(
      {
        pathname: '/admin/choirs/edit',
        query: { slug: slug }
      },
      { pathname: `/admin/choirs/${slug}/edit` }
    )
  } catch (e) {
    const message = e.message || 'Choir could not be added'

    dispatch(setAppMessage({
      text: message,
      category: 'error'
    }))
  }
}
