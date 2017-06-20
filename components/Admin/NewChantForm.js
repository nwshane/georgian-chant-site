import { Component } from 'react'
import { database } from '~/data/firebase'

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
    self.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate (e) {
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
      <form>
        <p>
          Slug:
          <input type='text' onChange={(e) => this.setState({slug: e.target.value})} />
        </p>
        <p>
          Georgian Name:
          <input type='text' onChange={(e) => this.setState({name: {ka: e.target.value}})} />
        </p>
        <button onClick={this.handleCreate}>Submit</button>
      </form>
    )
  }
}

export default NewChantForm
