// @flow
import { Component } from 'react'
import { database } from '~/data/firebase'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'

class NewChantPage extends Component {
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
      <Layout>
        <h1>Create New Chant</h1>
        <form>
          <p>
            Slug:
            <input type='text' onChange={(e) => this.setState({slug: e.target.value})} />
          </p>
          <p>
            Georgian Name:
            <input type='text' onChange={(e) => this.setState({name: {ka: e.target.value}})} />
          </p>
          <button onClick={this.handleCreate}>Create</button>
        </form>
      </Layout>
    )
  }
}

export default wrapPage(NewChantPage)
