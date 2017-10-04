// @flow
import type {Dispatch} from '~/data/types'
import getUpdateSheetMusicObject from './helpers/getUpdateSheetMusicObject'
import app, {database} from '~/data/firebase'
import {setAppMessage} from '~/data/ducks/appMessage'

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

    const uploadTask = app
    .storage()
    .ref()
    .child('sheetMusic')
    .child(newSheetMusicRef.key)
    .put(sheetMusicFile, { contentType: sheetMusicFile.type })

    const { downloadURL: url } = await uploadTask

    await database.ref().update(getUpdateSheetMusicObject(
      {
        sheetMusicKey: newSheetMusicRef.key
      },
      {
        school: formValues.school,
        chantSlug: formValues.chantSlug,
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
