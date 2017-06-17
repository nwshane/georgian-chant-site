// @flow

export type Chant = {
  +slug: string,
  +name: {
    +ka: string
  },
  +text: {
    +ka: string
  }
}

export type Chants = {}

export type User = ?{}

export type Dispatch = Function

export type State = {
  +currentUser: User,
  +chants: Chants,
  +appMessage: string
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
