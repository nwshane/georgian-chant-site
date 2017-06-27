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

export type User = ?{}

export type AppMessageCategory = 'neutral' | 'success' | 'error'

export type AppMessage = {
  text: string,
  category: AppMessageCategory
}

export type Dispatch = Function

export type Recordings = {
  [string]: {
    chantSlug: string,
    url: string
  }
}

export type State = {
  +currentUser: User,
  +chants: Chants,
  +appMessage: AppMessage,
  +recordings: Recordings
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
