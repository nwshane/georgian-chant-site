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
