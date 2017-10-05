// @flow

export type LocalizedObject = {
  +ka: string,
  [string]: string
}

export type SheetMusicScore = {
  +url: string,
  +chantSlug: string,
  +school: string
}

export type SheetMusic = {[string]: SheetMusicScore}

export type Chant = {
  +slug: string,
  +name: LocalizedObject,
  +text: LocalizedObject,
  +recordings: Array<string>,
  +sheetMusic: SheetMusic
}

export type Chants = {[string]: Chant}

export type Choir = {
  +slug: string,
  +name: LocalizedObject,
  +recordings: {[string]: boolean}
}

export type Choirs = {[string: string]: Choir}

export type School = {
  +name: LocalizedObject
}

export type Schools = {[string]: School}

export type User = ?{
  email: string
}

export type AppMessageCategory = 'neutral' | 'success' | 'error'

export type AppMessage = {
  text: string,
  category: AppMessageCategory
}

export type Recording = {
  chantSlug: string,
  url: string,
  choir: string,
  year: number
}

export type Recordings = {
  [string]: Recording
}

export type Filters = {
  search: string,
  startYear: number,
  endYear: number
}

export type State = {
  +currentUser: User,
  +chants: Chants,
  +choirs: Choirs,
  +appMessage: AppMessage,
  +filters: Filters,
  +recordings: Recordings,
  +schools: Schools,
  +sheetMusic: SheetMusic
}

export type Action =
    { type: 'SET_APP_MESSAGE', appMessage: AppMessage }
  | { type: 'CLEAR_APP_MESSAGE' }
  | { type: 'MERGE_CHANTS', chants: Chants }
  | { type: 'SET_CHANTS', chants: Chants }
  | { type: 'MERGE_CHOIRS', choirs: Choirs }
  | { type: 'SET_CHOIRS', choirs: Choirs }
  | { type: 'SET_CURRENT_USER', currentUser: User }
  | { type: 'MERGE_RECORDINGS', recordings: Recordings }
  | { type: 'SET_RECORDINGS', recordings: Recordings }
  | { type: 'SET_SCHOOLS', schools: Schools }
  | { type: 'SET_SHEET_MUSIC', sheetMusic: SheetMusic }
  | { type: 'SET_SEARCH', search: string }
  | { type: 'SET_FILTER_START_YEAR', startYear: number }
  | { type: 'SET_FILTER_END_YEAR', endYear: number }

export type GetState = () => State

// eslint-disable-next-line
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type Dispatch = (action: Action | ThunkAction) => Promise<*>;

export type UploadTask = {
  on: Function,
  then: Function,
  off: Function
}

// this is the object passed into Next JS Page's getInitialProps method
export type ServerContext = {
  query: {
    slug: string
  },
  req: {
    locale: string,
    originalUrl: string,
    currentUserServerData: any
  },
  res: {
    redirect: Function
  },
  pathname: string,
  store: {
    getState: GetState,
    dispatch: Dispatch
  }
}
