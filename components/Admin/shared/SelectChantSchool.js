// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSchools } from '~/data/ducks/schools'
import { FormsySelect } from 'formsy-material-ui/lib'
import MenuItem from 'material-ui/MenuItem'
import type { Schools } from '~/data/types'
import { getTransliteratedName } from '~/data/getters'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import { mapObjIndexed, values } from 'ramda'

type Props = {
  value: string,
  schools: Schools,
  intl: IntlShape,
  disabled: boolean
}

type State = {
  value: string
}

// TODO: Localize
class SelectChantSchool extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    if (props.schools) {
      this.state = {
        value: props.value || Object.keys(props.schools)[0]
      }
    }

    const self: any = this
    self.handleChange = self.handleChange.bind(this)
  }

  handleChange = (event: any, index: string, bla) => {
    this.setState({value: index})
  }

  render () {
    const {intl: {locale}, schools} = this.props
    return schools ? (
      <FormsySelect
        name='school'
        required
        disabled={this.props.disabled}
        value={this.state.value}
        onChange={this.handleChange}
        floatingLabelText='Chant School'
      >
        {values(mapObjIndexed((school, key) => (
          <MenuItem key={key} value={key} primaryText={getTransliteratedName(locale, school)} />
        ), schools))}
      </FormsySelect>
    ) : (
      <p>
        Please add some chant schools!
      </p>
    )
  }
}

const mapStateToProps = (state) => ({
  schools: getSchools(state)
})

export default injectIntl(connect(mapStateToProps)(SelectChantSchool))
