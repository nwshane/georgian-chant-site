// @flow
import React, { Component } from 'react'
import HeaderPresentation from './HeaderPresentation'
import type { State, User } from '~/data/types'
import { getCurrentUser } from '~/data/ducks/currentUser'
import { connect } from 'react-redux'

type Props = {
  currentUser: User
}

type ComponentState = {
  menuVisible: boolean
}

class Header extends Component<Props, ComponentState> {
  constructor () {
    super()
    this.state = {
      menuVisible: false
    }
  }

  toggleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }

  render () {
    return (
      <HeaderPresentation
        menuVisible={this.state.menuVisible}
        toggleMenu={this.toggleMenu}
        accountMenuVisible={!!this.props.currentUser}
      />
    )
  }
}

const mapStateToProps = (state: State) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps)(Header)
