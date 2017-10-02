// @flow
import React, { Component } from 'react'
import ChoirNameInput from './ChoirNameInput'
import type { Choir } from '~/data/types'
import { getTranslatedName } from '~/data/getters'
import convertNameToSlug from '~/helpers/convertNameToSlug'

type Props = {
  choir: ?Choir
}

type State = {
  name: string
}

// TODO: localize
class ChoirNameInputWithSlug extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleNameChange = this.handleNameChange.bind(this)
    this.state = {
      name: getTranslatedName('ka', props.choir)
    }
  }

  handleNameChange (e: { target: { value: string }}) {
    this.setState({ name: e.target.value })
  }

  render () {
    return (
      <div>
        <ChoirNameInput
          onChange={this.handleNameChange}
          value={this.state.name}
          disabled={!!this.props.choir}
          locale='ka'
          required
        />
        <p>
          Url name: {convertNameToSlug(this.state.name)}
        </p>
        <style jsx>{`
          p {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default ChoirNameInputWithSlug
