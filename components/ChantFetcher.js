// @flow
import { Component } from 'react'
import type { Children } from 'react'
import type { Chant } from '~/data/types'
import { fromJS } from 'immutable'
import { database } from '~/data/firebase'

type Props = {
  id: string,
  children?: Function
}

class ChantFetcher extends Component {
  props: Props

  state: {
    chant: ?Chant
  }

  constructor (props : Props) {
    super(props)
    this.state = {
      chant: null
    }
  }

  componentDidMount () {
    database
    .ref()
    .child('chants')
    .child(this.props.id)
    .once('value', (snapshot) => {
      this.setState({
        chant: fromJS(snapshot.val())
      })
    })
  }

  render () {
    const { children } = this.props
    return children && children(this.state.chant)
  }
}
export default ChantFetcher
