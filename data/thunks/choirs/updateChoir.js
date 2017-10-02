// @flow
import { database } from '~/data/firebase'
import convertNameToSlug from '~/helpers/convertNameToSlug'
import { setAppMessage } from '~/data/ducks/appMessage'
import type { Choir, Dispatch } from '~/data/types'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'

export default (oldSlug: string, choirValues: Choir) => async function (dispatch: Dispatch) {
  const newChoirValues = {
    ...choirValues,
    slug: convertNameToSlug(choirValues.name.ka)
  }

  const { slug: newSlug } = newChoirValues

  try {
    await database
    .ref()
    .child('choirs')
    .child(newSlug)
    .update(newChoirValues)

    if (oldSlug !== newSlug) {
      const oldChoir = await database
      .ref()
      .child('choirs')
      .child(oldSlug)

      oldChoir.remove()
    }

    dispatch(setAppMessage({
      text: 'Choir updated successfully',
      category: 'success'
    }))

    redirectToLocalizedUrl(
      {
        pathname: '/choirs/show',
        query: { slug: newChoirValues.slug }
      },
      { pathname: `/choirs/${newChoirValues.slug}` }
    )
  } catch (e) {
    dispatch(setAppMessage({
      text: 'Choir could not be updated',
      category: 'error'
    }))
  }
}
