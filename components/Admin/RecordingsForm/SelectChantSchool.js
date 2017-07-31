// @flow
import { Component } from 'react'
import { FormsySelect } from 'formsy-material-ui/lib'
import MenuItem from 'material-ui/MenuItem'

type Props = {
  value: string
}

type State = {
  value: string
}

// TODO: Localize
class SelectChantSchool extends Component<void, Props, State> {
  state = {
    value: ''
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      value: props.value
    }

    const self: any = this
    self.handleChange = self.handleChange.bind(this)
  }

  handleChange = (event: any, index: string) => {
    this.setState({value: index})
  }

  render () {
    return (
      <FormsySelect
        name='school'
        required
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem key='gelati' value='gelati' primaryText='Gelati' />
        <MenuItem key='shemokmedi' value='shemokmedi' primaryText='Shemokmedi' />
        <MenuItem key='sveti_tskhoveli' value='sveti_tskhoveli' primaryText="Svet'i Tskhoveli" />
        <MenuItem key='svan' value='svan' primaryText='Svan' />
      </FormsySelect>
    )
  }
}

export default SelectChantSchool
