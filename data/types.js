// @flow

export type LocalizedObject = {
  +ka: string,
  [string]: string
}

export type Chant = {
  +slug: string,
  +name: LocalizedObject,
  +text: LocalizedObject,
  +recordings: Array<string>
}

export type Chants = {[string]: Chant}

export type School = {
  +name: LocalizedObject
}

export type Schools = {[string]: School}

export type User = ?{}

export type AppMessageCategory = 'neutral' | 'success' | 'error'

export type AppMessage = {
  text: string,
  category: AppMessageCategory
}

export type Recording = {
  chantSlug: string,
  url: string
}

export type Recordings = {
  [string]: Recording
}

export type State = {
  +currentUser: User,
  +chants: Chants,
  +appMessage: AppMessage,
  +recordings: Recordings,
  +schools: Schools
}

export type Action =
    { type: 'SET_APP_MESSAGE', appMessage: AppMessage }
  | { type: 'CLEAR_APP_MESSAGE' }
  | { type: 'MERGE_CHANTS', chants: Chants }
  | { type: 'SET_CHANTS', chants: Chants }
  | { type: 'SET_CURRENT_USER', currentUser: User }
  | { type: 'MERGE_RECORDINGS', recordings: Recordings }
  | { type: 'SET_RECORDINGS', recordings: Recordings }
  | { type: 'SET_SCHOOLS', schools: Schools }

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
    getState: Function,
    dispatch: Function
  }
}
