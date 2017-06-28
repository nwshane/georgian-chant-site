// @flow
import { database } from '~/data/firebase'
import convertNameToSlug from '~/helpers/convertNameToSlug'
import { setAppMessage } from '~/data/ducks/appMessage'
import type { Chant, Dispatch } from '~/data/types'
import fetchChantBySlug from './fetchBySlug'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'

export default (oldSlug: string, chantValues: Chant) => async function (dispatch: Dispatch) {
  const newChantValues = {
    ...chantValues,
    slug: convertNameToSlug(chantValues.name.ka)
  }

  const { slug } = newChantValues

  try {
    await database
    .ref()
    .child('chants')
    .child(slug)
    .update(newChantValues)

    if (oldSlug !== slug) {
      const oldChant = await database
      .ref()
      .child('chants')
      .child(oldSlug)

      oldChant.remove()
    }

    await fetchChantBySlug(slug)

    dispatch(setAppMessage('Chant updated successfully', 'success'))
    redirectToLocalizedUrl(
      {
        pathname: '/chants/show',
        query: { slug: newChantValues.slug }
      },
      { pathname: `/chants/${newChantValues.slug}` }
    )
  } catch (e) {
    dispatch(setAppMessage('Chant could not be updated', 'error'))
  }
}
