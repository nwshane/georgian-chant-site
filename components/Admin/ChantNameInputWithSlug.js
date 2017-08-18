// @flow
import React, { Component } from 'react'
import ChantNameInput from './ChantNameInput'
import type { Chant } from '~/data/types'
import { getTranslatedName } from '~/data/getters'
import convertNameToSlug from '~/helpers/convertNameToSlug'

type Props = {
  chant: Chant
}

type State = {
  name: string
}

// TODO: localize
class ChantNameInputWithSlug extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    const self: any = this
    self.handleNameChange = this.handleNameChange.bind(this)
    this.state = {
      name: getTranslatedName('ka', props.chant)
    }
  }

  handleNameChange (e: { target: { value: string }}) {
    this.setState({ name: e.target.value })
  }

  render () {
    return (
      <div>
        <ChantNameInput
          onChange={this.handleNameChange}
          value={this.state.name}
          disabled={!!this.props.chant}
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

export default ChantNameInputWithSlug
