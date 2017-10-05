// @flow
import React from 'react'
import {getCurrentUser} from '~/data/ducks/currentUser'
import {connect} from 'react-redux'
import type {User} from '~/data/types'

type Props = {
  currentUser: User
}

const LoggedInAsMessage = ({currentUser}: Props) => (
  currentUser && <p>Logged in as {currentUser.email}.</p>
)

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps)(LoggedInAsMessage)
