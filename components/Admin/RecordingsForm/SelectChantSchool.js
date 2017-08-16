// @flow
import { Component } from 'react'
import { connect } from 'react-redux'
import { getSchools } from '~/data/ducks/schools'
import { FormsySelect } from 'formsy-material-ui/lib'
import MenuItem from 'material-ui/MenuItem'
import type { Schools } from '~/data/types'
import { getTransliteratedName } from '~/data/getters'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import map from 'lodash/map'

type DefaultProps = {
  value: 'gelati'
}

type Props = {
  value: string,
  schools: Schools,
  intl: IntlShape
}

type State = {
  value: string
}

// TODO: Localize
class SelectChantSchool extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    value: 'gelati'
  }

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

  handleChange = (event: any, index: string, bla) => {
    this.setState({value: index})
  }

  render () {
    const {intl: {locale}, schools} = this.props
    return (
      <FormsySelect
        name='school'
        required
        value={this.state.value}
        onChange={this.handleChange}
      >
        {map(schools, (school, key) => (
          <MenuItem key={key} value={key} primaryText={getTransliteratedName(school, locale)} />
        ))}
      </FormsySelect>
    )
  }
}

const mapStateToProps = (state) => ({
  schools: getSchools(state)
})

export default injectIntl(connect(mapStateToProps)(SelectChantSchool))
