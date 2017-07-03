// @flow
import app from '~/data/firebase'

export default (recordingKey: string) => (
  app
  .storage()
  .ref()
  .child('recordings')
  .child(recordingKey)
)
