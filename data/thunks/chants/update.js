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

  const { slug: newSlug } = newChantValues

  try {
    await database
    .ref()
    .child('chants')
    .child(newSlug)
    .update(newChantValues)

    if (oldSlug !== newSlug) {
      const oldChant = await database
      .ref()
      .child('chants')
      .child(oldSlug)

      oldChant.remove()
    }

    await fetchChantBySlug(newSlug)

    dispatch(setAppMessage({
      text: 'Chant updated successfully',
      category: 'success'
    }))

    redirectToLocalizedUrl(
      {
        pathname: '/chants/show',
        query: { slug: newChantValues.slug }
      },
      { pathname: `/chants/${newChantValues.slug}` }
    )
  } catch (e) {
    dispatch(setAppMessage({
      text: 'Chant could not be updated',
      category: 'error'
    }))
  }
}
