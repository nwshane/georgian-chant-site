// @flow
import { setAppMessage } from '~/data/ducks/appMessage'
import { database, storage } from '~/data/firebase'

const uploadRecordingFile = (key, recordingFile) => {
  const uploadTask = storage
  .ref()
  .child('recordings')
  .child(key)
  .put(recordingFile, { contentType: recordingFile.type })

  uploadTask.on('state_changed', (snapshot) => {
    console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100, '%')
  })

  return uploadTask
}

type RecordingData = {
  chantSlug: string,
  recordingFile: {
    type: string
  }
}

export default ({ chantSlug, recordingFile }: RecordingData) => async function (dispatch: Function) {
  try {
    dispatch(setAppMessage('Saving recording'))
    const newRecordingRef = await database.ref().child('recordings').push({
      chantSlug: chantSlug
    })

    const { key } = await newRecordingRef.once('value')

    const { downloadURL: url } = await uploadRecordingFile(key, recordingFile)

    await newRecordingRef.update({
      url
    })

    dispatch(setAppMessage('Finished saving the recording', 'success'))
  } catch (e) {
    dispatch(setAppMessage('Could not save recording', 'error'))
  }
}
