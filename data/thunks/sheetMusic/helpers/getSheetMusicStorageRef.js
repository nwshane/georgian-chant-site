// @flow
import app from '~/data/firebase'

export default (sheetMusicScoreId: string) => (
  app
  .storage()
  .ref()
  .child('sheetMusic')
  .child(sheetMusicScoreId)
)
