// @flow
import type { Map } from 'immutable'

export type Chant = Map<string, *>
export type Chants = Map<string, Chant>

export type User = ?{}

export type Dispatch = Function

export type State = {
  +currentUser: User
}
