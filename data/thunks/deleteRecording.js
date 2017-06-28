// @flow
import type { Recording } from '~/data/types'
export default (recording: Recording) => (dispatch: Function) => (console.log('deleting recording', recording))
