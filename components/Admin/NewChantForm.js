// @flow
import { Component } from 'react'
import { database } from '~/data/firebase'
import NewChantFormPresentation from './NewChantFormPresentation'

// TODO: Localize
class NewChantForm extends Component {
  state = {
    name: {
      ka: ''
    },
    slug: ''
  }

  constructor () {
    super()
    const self: any = this
    self.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    database
    .ref()
    .child('chants')
    .push({
      name: {
        ka: this.state.name.ka
      },
      slug: this.state.slug
    })
  }

  render () {
    return (
      <NewChantFormPresentation
        updateState={this.setState}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default NewChantForm
