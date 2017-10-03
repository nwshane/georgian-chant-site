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
  school: string
}

export default (sheetMusicFile: File, formValues: FormValues) => async function (dispatch: Dispatch) {
  console.log('Called thunk createSheetMusic with file', sheetMusicFile)
  try {
    const newSheetMusicRef = await database.ref().child('sheetMusic').push()
    console.log('newSheetMusicRef', newSheetMusicRef)
    console.log('newSheetMusicRef.key', newSheetMusicRef.key)

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
