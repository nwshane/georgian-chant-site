// @flow
import type {Dispatch} from '~/data/types'
import getUpdateSheetMusicObject from './helpers/getUpdateSheetMusicObject'
import {database} from '~/data/firebase'
import {setAppMessage} from '~/data/ducks/appMessage'
import getSheetMusicStorageRef from './helpers/getSheetMusicStorageRef'

type File = {
  name: string,
  type: string
}

type FormValues = {
  school: string,
  chantSlug: string
}

export default (sheetMusicFile: File, formValues: FormValues) => async function (dispatch: Dispatch) {
  try {
    const newSheetMusicRef = await database.ref().child('sheetMusic').push()

    const uploadTask = getSheetMusicStorageRef(newSheetMusicRef.key)
    .put(sheetMusicFile, { contentType: sheetMusicFile.type })

    const { downloadURL: url } = await uploadTask
    const {chantSlug, school} = formValues

    await database.ref().update(getUpdateSheetMusicObject(
      {
        sheetMusicKey: newSheetMusicRef.key,
        chantSlug
      },
      {
        school,
        chantSlug,
        url
      }
    ))

    dispatch(setAppMessage({
      text: 'Successfully saved sheet music file',
      category: 'success'
    }))
  } catch (e) {
    dispatch(setAppMessage({
      text: 'Could not save sheet music',
      category: 'error'
    }))
  }
}
