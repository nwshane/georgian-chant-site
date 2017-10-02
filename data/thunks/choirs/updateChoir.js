// @flow
import type {Choir, Dispatch} from '~/data/types'

const updateChoir = (slug: string, choirValues: Choir) => async function (dispatch: Dispatch) {
  console.log('Updating choir', {
    slug,
    choirValues
  })
  return null
}

export default updateChoir
