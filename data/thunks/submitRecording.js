// @flow
import { setAppMessage } from '~/data/ducks/appMessage'
import { storage } from '~/data/firebase'

const uploadRecordingFile = (key, recordingFile) => {
  const uploadTask = storage
  .ref()
  .child('chants')
  .child(key)
  .put(recordingFile, { contentType: recordingFile.type })

  uploadTask.on('state_changed', (snapshot) => {
    console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100, '%')
  })

  return uploadTask
}

export default (recordingFile: {type: string}) => async function (dispatch: Function) {
  try {
    dispatch(setAppMessage('Saving recording'))
    const key = 'blaaaaafdsfdf'
    await uploadRecordingFile(key, recordingFile)
    dispatch(setAppMessage('Finished saving the recording', 'success'))
  } catch (e) {
    dispatch(setAppMessage('Could not save recording', 'error'))
  }
}
