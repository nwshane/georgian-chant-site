// @flow
import { database } from '~/data/firebase'
import convertNameToSlug from '~/helpers/convertNameToSlug'
import { setAppMessage } from '~/data/ducks/appMessage'
import type { Chant, Dispatch } from '~/data/types'
import { setChant } from '~/data/ducks/chants'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'

export default (oldSlug: string, chantValues: Chant) => async function (dispatch: Dispatch) {
  const newChantValues = {
    ...chantValues,
    slug: convertNameToSlug(chantValues.name.ka)
  }

  try {
    await database
    .ref()
    .child('chants')
    .orderByChild('slug')
    .equalTo(oldSlug)
    .once('value', (snapshot) => {
      snapshot.forEach((chantSnapshot) => {
        chantSnapshot.ref.update(newChantValues)
        dispatch(setChant({
          chant: newChantValues,
          key: chantSnapshot.getKey()
        }))
      })
    })

    dispatch(setAppMessage('Chant updated successfully'))
    redirectToLocalizedUrl(
      {
        pathname: '/chants/show',
        query: { slug: newChantValues.slug }
      },
      { pathname: `/chants/${newChantValues.slug}` }
    )
  } catch (e) {
    dispatch(setAppMessage('Chant could not be updated'))
  }
}
